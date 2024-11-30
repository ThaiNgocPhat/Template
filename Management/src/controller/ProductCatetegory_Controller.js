import sequelize from "../config/db.js";

class ProductCategoryController {
    // createProductCategory = async (req, res) => {
    //     try{
    //         const {name, desc} = req.body;
    //         const [result] = await sequelize.query(
    //         `INSERT INTO product_category (name, desc, created_at, modified_at) VALUES (?, ?, NOW(), NOW())`,
    //         {
    //             replacements: [name, desc],
    //             type: sequelize.QueryTypes.INSERT
    //         }
    //     );
    //     res.status(200).json({id: result, name, desc});
    //     }catch(error){
    //         res.status(500).json({error: error});
    //     }
    // }
    createProductCategory = async (req, res) => {
        try {
            const { name, desc } = req.body;
            if (!name || !desc) {
                return res.status(400).json({ status: false, message: 'Name and desc are required.' });
            }
            const sql = `
                INSERT INTO product_category 
                (name, \`desc\`) 
                VALUES (?, ?)
            `;
            const result = await sequelize.query(sql, {
                replacements: [name, desc]
            });
            res.status(200).json({ status: true, data: result });
        } catch (error) {
            console.error('Error creating product category:', error);
            res.status(500).json({ status: false, message: 'Internal Server Error', error: error.message });
        }
    };
}

export default new ProductCategoryController();