interface Notice {
    id: number,
    subject: string,
    content: string,
    createdBy: string,
    updatedBy?: string,
    createdOn: Date,
    updatedOn?: Date,
}

export {
    Notice,
}