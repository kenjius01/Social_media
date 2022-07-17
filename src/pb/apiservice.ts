export interface Userinfo {
    id: number;
    address: string;
    avatar: string;
    coverImg: string;
    desc: string;
    firstName: string;
    lastName: string;
    relationship: string;
    username: string;
    workAt: string;
}

export interface PostResponse {
    id: number;
    userId: number;
    desc: string;
    image: string;
    likes: number[];
    CreatedAt: Date;
    UpdatedAt: Date;
}
