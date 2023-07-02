export interface Mail{
    id:number,
    from:string,
    to:string,
    subject:string,
    body:string,
    date:string,
    isReaded:boolean,
    avatar:string,
    tag:string,
    attachements:attachement[]
};

export interface attachement{
    file:string,
    name:string
}