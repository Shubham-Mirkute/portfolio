const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'home',
    title: 'SM',
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Shubham Mirkute',
    role: 'Full Stack Developer',
    description:
      "I am a highly motivated software developer with a Bachelor's degree in Engineering (B.E.). I am actively seeking job opportunities and internships to leverage my programming skills, problem-solving abilities, and passion for technology. My goal is to contribute to innovative projects and continue growing in the dynamic field of software development.",
    resume: '#',
    social: {
      linkedin: 'https://www.linkedin.com/in/shubham-mirkute-067310211/',
      github: 'https://github.com/Shubham-Mirkute',
    },
  }
  
  const projects = [
    {
      name: 'Online Hospital Management System',
      description:
        'I have created a website for online Hospital Management System where you can add, delete and modify the data about patient and staffs.',
      stack: ['HTML', 'CSS', 'JavaScript', 'python-Django' , 'SQLite'],
    },
    {
      name: 'Online Library Website',
      description:
        'I have created a website of online library that has section of add ,delete and modify data with features such as search and authentication system.',
      stack: ['HTML', 'CSS', 'JavaScript', 'python-Django' , 'MySQL'],
    },
    {
      name: 'A Quiz application',
      description:
        'I have created a Quiz application. which shows result and stores the score locally.',
      stack: ['HTML','CSS', 'JavaScript'],
    },
    {
      name: "ToDo List Application",
      description: "I have created an application for ToDo list where user can add the task and delete the completed task. For this project I have use React technology.\r\n\r\nlink:- https://shubham-mirkute.github.io/React-Todo/ .",
      stack: ['React']
  },
  ]
  
  const skills = [
    {name:'Python' },
    {name:'Java' },
    {name:'MySQL' },
    {name:'React' },
    {name:'HTML' },
    {name:'CSS' },
    {name: 'JavaScript' },
    {name:'Angular' },
    {name: 'Git' },
  ]
  

  
  export { header, about, projects, skills }