export const adminMenu = [
    { //hệ thống quản lý người dùng
        name: 'menu.admin.manager-user', menus: [

            {
                name: 'menu.admin.CRUD-user', link: '/system/CRUD-user'
            },

            {
                name: 'menu.admin.CRUD-user-redux', link: '/system/CRUD-user-redux'
            },

            {
                name: 'menu.admin.manager-doctor', link: '/system/manager-doctor'
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-manage-redux', link: '/system/user-manage-redux' },
                // ]
            },

            // {
            //     name: 'menu.admin.manager-admin', link: '/system/manager-admin'
            // },

            {
                name: 'menu.admin.editer-content-doctor', link: '/system/editer-content-doctor'
            },

            {//quản lý bài đăng blog
                name: 'menu.admin.editer-content-handbook', link: '/system/editer-content-handbook'
            },

            { //quản lý lịch khám
                name: 'menu.doctor.manager-shedule', link: '/doctor/manager-shedule'
            }


        ]
    },

    { //hệ thống quản lý phòng khám
        name: 'menu.admin.clinic', menus: [
            {
                name: 'menu.admin.manager-clinic', link: '/system/manager-clinic'
            },
        ]
    },

    { //hệ thống quản lý chuyên khoa
        name: 'menu.admin.specialty', menus: [
            {
                name: 'menu.admin.manager-specialty', link: '/system/manager-specialty'
            },
        ]
    },

    { //hệ thống quản lý bài đăng
        name: 'menu.admin.handbook', menus: [
            {
                name: 'menu.admin.manager-handbook', link: '/system/manager-handbook'
            },
        ]
    },
];

export const doctorMenu = [
    { //quản lý lịch khám
        name: 'menu.admin.manager-user',
        menus: [

            {
                name: 'menu.doctor.manager-shedule', link: '/doctor/manager-shedule'
            },
        ]
    }
];