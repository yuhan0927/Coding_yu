const Joi = require('joi');
module.exports = [
    {
        method: 'POST',
        path: '/orders',
        handler: async (Request, reply) => {
            reply();
        },
        config: {
            tags: ['api', 'orders'],
            description: '创建订单',
            validate: {
                payload: {
                    goodsList: Joi.array().items( //Joi.array() 类型为数组
                        Joi.object().keys({
                            goods_id: Joi.number().integer(),
                            count: Joi.number().integer()
                        })
                    )
                },
                headers: Joi.object({
                    authorization: Joi.string().required()
                }).unknown()
            }
        }
    }
]