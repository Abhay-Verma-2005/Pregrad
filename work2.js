var library = [
    {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true,
      price: 500
    },
    {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
      readingStatus: true,
      price: 750
    },
    {
      author: 'Suzanne Collins',
      title: 'Mockingjay: The Final Book of The Hunger Games',
      readingStatus: false,
      price: 880
    }
  ];
  let listTit=[];
  for (let ele of library){
    listTit.push(ele.title);
  }
  console.log(listTit);