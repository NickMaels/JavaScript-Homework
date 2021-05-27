  function today()
  {
    let today=new Date();
    alert(today)
  }
  function yesterday()
  {
    let date=new Date();

    let yesterday=new Date();

    yesterday.setDate(date.getDate()-1);

    alert(yesterday);
  }
  function ten_ago()
  {
   let date=new Date();

   let ten=new Date();

   ten.setFullYear(date.getFullYear()-10);
   alert(ten);
  }
  function week_later()
  {
    let date=new Date();

    let week=new Date();

    week.setDate(date.getDate()+7);

    alert(week);
  }