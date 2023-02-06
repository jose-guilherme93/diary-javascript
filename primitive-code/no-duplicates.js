 const skills = ['js', 'css', 'html', 'git', 'bash', 'git', 'git']
 const noDuplicates = new Set(skills)

 noDuplicates.forEach(element => {
     console.log(element)
 });

 //no duplicates after the new Set() method. 