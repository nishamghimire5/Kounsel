import cloudinary from 'cloudinary';
import {IncomingForm} from 'formidable';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

export const config = {
    api: {
        bodyParser: false
    }
};

export default async function upload(req, res) {
    if (req.method === 'POST') {
        const data = await new Promise((resolve, reject) => {
            const form = new IncomingForm();

            form.parse(req, (err, fields, files) => {
                if (err) return reject(err);
                resolve({fields, files});
            });
        });
        const file = data?.files?.inputFile.filepath;
        const user_id = data.fields.user_id;
        try {
            const response = await cloudinary.v2.uploader.upload(file, {
                public_id: user_id,
                invalidate: true,
                overwrite: true,
            });
            const {public_id} = response;
            const userResponse = await fetch(
                `${process.env.SERVER}/api/user/?email=${user_id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        avatar: public_id,
                        version: String(response.version),
                    }),
                }
            );
            const data = await userResponse.json();
            return res.status(200).json({message: 'success'});
        } catch (error) {
            console.error(JSON.stringify(error));
        }
    } else {
        return res.status(403).send('Forbidden method');
    }
}