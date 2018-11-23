import Cookies from 'js-cookie';
import {
    localesList,
    defaultLocale,
} from './config';

/**
 * 1、浮点运算加、乘： accAdd accMul
 * 2、字符串处理：千分位函数formatPriceThousands
 * 3、邮箱、密码有效性检测
 */
const setLang = (lang: string) => {
    if (typeof lang !== 'string' || localesList.indexOf(lang) === -1) {
        lang = 'en-US';
    }
    Cookies.set('lang', lang.replace('-', '_'), {
        path: '/',
        expires: 30,
    });
    return lang;
};



const getLangFromCookie = () => {
    const lang = String(Cookies.get('lang')).replace('_', '-');
    if (localesList.indexOf(lang) !== -1) {
        return lang;
    }
    return defaultLocale;
};


const accMul = (arg1: string | number, arg2: string | number) => {
    let m = 0;
    const s1 = arg1.toString();
    const s2 = arg2.toString();
    try {
        m += s1.split('.')[1].length;
    } catch (e) {
        // empty
    }
    try {
        m += s2.split('.')[1].length;
    } catch (e) {
        // empty
    }
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
};

const accAdd = (arg1: string | number, arg2: string | number) => {
    let r1;
    let r2;
    let m;
    try {
        r1 = arg1.toString().split('.')[1].length;
    } catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split('.')[1].length;
    } catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (accMul(arg1, m) + accMul(arg2, m)) / m;
};

const formatPriceThousands = (price: string | number) => {
    price = (price || '0').toString();
    let tmp;
    if (price.indexOf('.') < 0) {
        tmp = price.replace(/(?=(?!(\b))(\d{3})+$)/g, ',');
    } else {
        tmp = price.split('.');
        tmp = (tmp[0]).toString().replace(/(?=(?!(\b))(\d{3})+$)/g, ',') + '.' + tmp[1];
    }
    return tmp;
};

const checkEmail = (email: string) => {
    return /^[a-zA-Z0-9_-]+(\.([a-zA-Z0-9_-])+)*@[a-zA-Z0-9_-]+[.][a-zA-Z0-9_-]+([.][a-zA-Z0-9_-]+)*$/.test(email);
};

const checkPwd = (pwd: string) => {
    return pwd && pwd.length >= 8 && pwd.length <= 20 && /[a-zA-Z]/g.test(pwd) && /[0-9]/g.test(pwd);
};

export {
    accMul,
    accAdd,
    formatPriceThousands,
    checkEmail,
    checkPwd,
    setLang,
    getLangFromCookie,
};
