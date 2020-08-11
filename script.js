const challenges=[
    'base-apparel-coming-soon-master'
];
const list=document.getElementById("projectlist");
challenges.forEach((challenge,index)=>{
    const listItem=document.createElement("li");
listItem.innerHTML=`
<a href="/${challenge}/index.html">
<div class="project">
<img src="/${challenge}/design/desktop-design.jpg" alt="design ${challenge}" />
<h3>${index+1}. ${challenge.replace('-'," ")}</h3>
</div>
</a>
`;
list.append(listItem)
})