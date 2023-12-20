export interface IRole {
    role_id: number;
    role_name: string;
}

export interface ISkills {
    skills_id: number;
    skill_name: string;
}


export interface IProject {
    project_id: number;
    p_name: string;
    description: string;
    skills: string;
    startdate: Date;
    endgate: Date;
    published: number;
    status: string;
}
export interface IProjectMembers {
    member_id: number;
    project: IProject;
    student: IStudent;
    joindate: Date;
    role: IRole;
}

export interface IStudent {
    stud_id: number;
    fname: string;
    sname: string;
    email: string;
    date_reg: Date;
    login: string;
    pass: string;
}