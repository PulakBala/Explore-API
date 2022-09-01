  const loadUserFetch =()=>{
    const url = `https://randomuser.me/api/?gender=female`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayUser(data.results[0]))
    .catch(error => console .log(error))
  }

  const loadUserAsync = async () => {
     const link = `https://randomuser.me/api/?gender=female`;
     try{
        const res = await fetch(link);
        const data = await res.json();
        displayUser(data.results[0])
     }
     catch(error){
        console.log(error);
     }
  }

  const displayUser =(user)=>{
    console.log(user)
  }

  loadUserFetch();