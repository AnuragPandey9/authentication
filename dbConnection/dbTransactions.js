function transaction(dbObj, email, password) {
    return new Promise((res, rej) => {
        dbObj.beginTransaction((error) => {
            if (error) rej(error);
            const queryString = `select * from profileBook where emailId = '${email}' and password = '${password}'`;
            dbObj.query(queryString, (error, result, fields) => {
                if (error) {
                    rej(error);
                }
                if(result.length > 0)
                res(result);
                else 
                rej("invalid Credentials");
            });
        });
    });
}

module.exports.transaction = transaction;