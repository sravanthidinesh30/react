
//reactelement(object)=Html(browser understands)

//const parent=React.createElement("div",{id:"parent"},
 //  [
  //  React.createElement("div",{id:"child"},
  //      [
     //       React.createElement("h1",{},"iam a heading"),
      //      React.createElement("h2",{},"iam h2 heading")
      //  ]),
  //      React.createElement("div",{id:"child2"},
         //   [
        //        React.createElement("h1",{},"iam a heading"),
          //      React.createElement("h2",{},"iam h2 heading")
            //]
           // )
   //]);

    // console.log(parent);


//root.render(parent);
//================
//const heading=React.createElement("h1",{id:"heading"},"hello world");
//const root=ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

const row=React.createElement("div",{id:"parent"},
    
[
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"i am h1 tag"
        ),
        React.createElement("h2",{},"i am h2 tag"
        )] ),
        React.createElement("div",{id:"child2"},
            [React.createElement("h1",{},"i am h1 tag"
            ),
            React.createElement("h2",{},"i am h2 tag"
            )] )
]);

        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(row);