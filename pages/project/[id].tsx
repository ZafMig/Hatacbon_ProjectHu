import { IProject, IProjectMembers, IStudent } from "../types/project";
import { useEffect, useState } from "react";
import UIButton from "../../Components/UIButton";
import { MdOutlineAccountCircle } from "react-icons/md";
import classes from "../../styles/components/project.module.scss";
import { IoNotificationsOutline } from "react-icons/io5";
import  { useRouter } from "next/router";
import axios from "axios";
import Redact from ".././../Components/edit";

const ProjectPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [project, setProject] = useState<IProject | null>(null);
 
    
    const router = useRouter();
    const { id } = router.query;

    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    
      const handleLogout = () => {
        
        console.log('Logout');
      };

      const handlePortfolio = () => {
        
        console.log('Go to portfolio');
      };

    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

      useEffect(() => {
        if (id) {
          axios.get(`http://localhost:3000/projects/` + id)
            .then(response => setProject(response.data))
            .catch(error => console.error('Error:', error));
        }
      }, [id]);
      

    const dateReg: Date = new Date(2023, 11, 16);
    
    const members: IStudent = {
      fname: 'fname', sname: 'sname',
      stud_id: 1,
      email: "retet@gmail.com",
      date_reg: dateReg,
      login: "315eher",
      pass: "123"
    }
    return(
        <div className={classes['Project']}>
            <header className={classes["Project__Header"]}>
                <img onClick={() => router.push("/")} src="/images/IThub.b190e489.svg" alt="" />
                <input className={classes['Project__Header-input']} placeholder="Поиск проекта" type="text" />
                <IoNotificationsOutline style={{scale:"1.5"}}/>
                <div className={classes["dropdown"]}>
                    <MdOutlineAccountCircle style={{scale:"2"}} onMouseEnter={toggleMenu} />
                    {isMenuOpen  && (
                    <div onMouseLeave={toggleMenu} className={classes["dropdown-menu"]}>
                    <div style={{cursor:"pointer"}} onClick={() => router.push("/portfolio")}>Портфолио</div>
                    <div onClick={handleLogout}>Выход</div>
                </div>
      )}
                </div>
                
            </header>
            <div className={classes['Project__Main']}>
                <div className={classes['Project__Main-name']}>
                      <h1>{project?.p_name}</h1>
                      <div className={classes['Project__Main-status']}>
                <div className={project?.status === 'В процессе' ? 'blue' : project?.status === 'Завершен' ? 'green' : 'red'}>
                    {project?.status}
                </div>
                </div>
                </div>
                <div className={classes['Project__Main__Members']}>
                    <h2>Участники</h2>
                    <ul className={classes['Project__Main__Member-list']}>
                    <li>{members.fname} {members.sname}</li>
                    <li>{members.fname} {members.sname}</li>
                    <li>{members.fname} {members.sname}</li>
                 </ul>
                </div>
                <div className={classes['Project__Main__Discription']}>
                  <p>{project?.description}</p>
                </div>
                <div className={classes['Project__Main__Skills']}>
                  <h2>Навыки</h2>
                  <p className={classes['Project__Main__Skills-list']}>
                      {project?.skills}
                  </p>
                </div>
                <div className={classes['Project__Buttons']}>
                <UIButton onClick={openModal} type="number" children="Редактировать"/>
                <UIButton type="number" children="Пригласить"/>
                <UIButton type="active" children="Удалить участника"/>
                <UIButton type="active" children="Покинуть"/>
                </div>
            </div>
            <Redact isOpen={isModalOpen} onClose={closeModal} 
             initialValues={{ 
              name: project?.p_name ?? "", 
              description: project?.description ?? "", 
              skills: project?.skills ?? "" 
            }}
            >
            
            </Redact>
        </div>
    )
}

export default ProjectPage;