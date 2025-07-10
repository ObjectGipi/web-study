export class BaseDatabase {
    protected find = (filename: string) => {
        return true;
    }
}
// overloading: c++, java, c# 지원 ok | 파이썬, js 지원 no
// virtual, override, abstract: 중요