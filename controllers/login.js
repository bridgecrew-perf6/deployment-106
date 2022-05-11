const pool = require("../db/database");
class hi {
    static async hi(req, res) {
        try {
            pool.query("select * from company", (err, results) => {
                if (err) throw err;
                res.status(200).json(results.rows);
            });
        } catch (e) {}
    }
}
module.exports = hi;
