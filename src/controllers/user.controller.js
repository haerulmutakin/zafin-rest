import firebaseSvc from '../firebaseconn/firebase-connection.js';

export default class UserController {

    getUsers = async (_, res) => {
        const userData = [];
        await firebaseSvc.auth().listUsers()
            .then(res => {
                const data = res.users;
                data.forEach(element => {
                    userData.push(element);
                });
            });
        res.send({
            result: true,
            data: userData,
            total: userData.length
        });
    }

    getUserById = async (req, res) => {
        const result = {};
        let statusCode = 200;
        const userId = req.params.id;
        await firebaseSvc.auth().getUser(userId)
            .then(res => {
                result.status = true;
                result.data = res;
            })
            .catch(err => {
                result.status = true;
                result.message = err.errorInfo.message;
                statusCode = 404;
            });
        res.status(statusCode).send(result);
    }

    creteUser = async (req, res) => {
        const result = {};
        let statusCode = 201;
        const body = req.body;
        const {email, password, displayName} = body;
        const userPayload = {
            email,
            password,
            displayName
        }

        await firebaseSvc.auth().createUser(userPayload)
            .then(res => {
                result.status = true;
                result.message = 'Berhasil menambah user';
            })
            .catch((err) => {
                result.status = false;
                result.message = err.errorInfo.message;
                statusCode = 409;
            });

        res.status(statusCode).send(result)
    }

    updateUser = async (req, res) => {
        const userId = req.params.id;
        const result = {};
        let statusCode = 200;
        const body = req.body;

        await firebaseSvc.auth().updateUser(userId, body)
            .then(res => {
                result.status = true;
                result.message = 'Berhasil update user';
            })
            .catch((err) => {
                result.status = false;
                result.message = err.errorInfo.message;
                statusCode = 400;
            });

        res.status(statusCode).send(result)
    }

    deleteUser = async (req, res) => {
        const result = {};
        let statusCode = 200;
        const userId = req.params.id;
        await firebaseSvc.auth().deleteUser(userId)
            .then(res => {
                result.status = true;
                result.message = 'Berhasil menghapus user';
            })
            .catch((err) => {
                result.status = false;
                result.message = err.errorInfo.message;
                statusCode = 404;
            });
        res.status(statusCode).send(result);
    }
}