import { useTranslation } from 'react-i18next';

// 导航菜单配置
const navConfig = {
    items: [
        {
            name: 'nav.dashboard',
            url: '/dashboard',
            icon: 'icon-speedometer'
        },
        {
            name: 'nav.configs',
            url: '/showconfig',
            icon: 'icon-note'
        },
        {
            name: 'nav.explorer',
            url: '/remoteExplorer',
            icon: 'icon-screen-desktop'
        },
        {
            name: 'nav.backend',
            url: '/rcloneBackend',
            icon: 'icon-star',
        },
        {
            name: 'nav.mounts',
            url: '/mountDashboard',
            icon: 'fa fa-hdd-o'
        },
        {
            name: 'nav.logout',
            url: '/login',
            icon: 'icon-logout',
        },

    ],
};

// 导航菜单组件
export const NavMenu = () => {
    const { t } = useTranslation();
    
    return {
        items: navConfig.items.map(item => ({
            ...item,
            name: t(item.name)
        }))
    };
};

export default navConfig;
