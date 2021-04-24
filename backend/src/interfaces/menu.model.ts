interface Menu {
    name: string;
    adminPath: string;
    publicPath: string;
    position: string;
    state: boolean;
    children: Array<SubMenu>
}

interface SubMenu {
    name: string;
    adminPath: string;
    publicPath: string;
    position: string,
    state: boolean,
}

interface DBMenu {
    adminPath: string;
    content: string;
    id: number;
    level: number;
    name: string;
    parentMenu: string;
    publicPath: string;
    position: string,
    state: boolean,
    children?: Array<DBMenu>,
}


export {
    Menu,
    DBMenu,
}