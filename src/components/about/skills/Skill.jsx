
import './skill.css';

const frontendSkills = [
  {
    title: 'javascript (React js)',
    percentage: '95%',
    par: 'Frontend',
    id:1
  },
  {
    title: 'HTML, CSS, Js',
    percentage: '95%',
    par: 'Frontend',
    id:2
  },
  {
    title: 'Nextjs',
    percentage: '65%',
    par: 'Frontend',
    id:3
  },
  {
    title: 'tailwindcss',
    percentage: '55%',
    par: 'Style Sheet',
    id:4
  }
]
const dataSkills = [
  {
    title: 'Node js',
    percentage: '95%',
    par: 'Backend',
    id:10
  },
  {
    title: 'Mysql & Postgresql, NoSql',
    percentage: '95%',
    par: 'Database',
    id:20
  },
  {
    title: 'LangFlow',
    percentage: '65%',
    par: 'AI & Machine Learning',
    id:30
  },
  {
    title: 'Python',
    percentage: '55%',
    par: 'Data Science',
    id:40
  }
]

const Skill = () => {
  return (
    <div className='skills-wrapper d-flex gap-5'>
      <div className='frontend-skills w-50'>
        {
          frontendSkills.map((item) => (
            <SkillItem 
              key={item.id}
              title={item.title}
              percentage={item.percentage}
              par={item.par}
            />
          ))
        }
      </div>

      <div className='customer-skills w-50'>
        {
          dataSkills.map((item) => (
            <SkillItem 
              key={item.id}
              title={item.title}
              percentage={item.percentage}
              par={item.par}
            />
          ))
        }
      </div>
    </div>
  )
}

const SkillItem = ({ title, percentage, par }) => {
  return (
    <div className="skill-data mb-3">
        <div className="skill-title d-flex align-items-center justify-content-between">
            <h6>{title}</h6>
            <span>{percentage}</span>
        </div>
        <div className="skill-bar">
            <span className="bar-percentage" style={{width: `${percentage}`}}></span>
        </div>
        <p>{par}</p>
    </div>
  )
}

export default Skill;