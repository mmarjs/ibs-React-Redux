import {
    NAVBAR_BG,
    SIDEBAR_BG,
    THEME,
    SIDEBAR_POSITION,
    HEADER_POSITION,
    LAYOUT
} from '../constants/';

export const setNavbarBg = (payload) => {
    return {
        type: NAVBAR_BG,
        payload
    }
}

export const setSidebarBg = (payload) => {
    return {
        type: SIDEBAR_BG,
        payload
    }
}

export const setTheme = (payload) => {
    return {
        type: THEME,
        payload
    }
}

// export const setSidebarHeaderPos = (payload) => {
//     return {
//         type: SIDEBAR_HEADER_POSITION,
//         payload
//     }
// }

export const setSidebarPos = (payload) => {
    return {
        type: SIDEBAR_POSITION,
        payload
    }
}

export const setHeaderPos = (payload) => {
    return {
        type: HEADER_POSITION,
        payload
    }
}

export const setLayout = (payload) => {
    return {
        type: LAYOUT,
        payload
    }
}