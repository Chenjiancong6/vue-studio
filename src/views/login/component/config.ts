// 编写好规则
export const rulesAccount = {
    name: [
        {
            required: true,
            message: '用户名是必传内容~',
            trigger: 'blur'
        },
        {
            pattern: /^[a-z0-9]{5,10}$/,
            message: '用户名必须是5~10个字母或者数字~',
            trigger: 'blur'
        }
    ],
    password: [
        {
            required: true,
            message: '密码是必传内容~',
            trigger: 'blur'
        },
        {
            pattern: /^[a-z0-9]{3,}$/,
            message: '用户名必须是3位以上的字母或者数字~',
            trigger: 'blur'
        }
    ]
};

// 手机验证规则

export const rulesPhone = {
    num: [
        {
            required: true,
            message: '手机号是必传内容~',
            trigger: 'blur'
        },
        {
            pattern: /^[0-9]{1,11}$/,
            message: '手机号必须是11位数字~',
            trigger: 'blur'
        }
    ],
    code: [
        {
            required: true,
            message: '验证码是必传内容~',
            trigger: 'blur'
        },
        {
            pattern: /^[0-9]{3,}$/,
            message: '验证码必须是3位以上的字母或者数字~',
            trigger: 'blur'
        }
    ]
};
