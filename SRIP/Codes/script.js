	var canvas = document.querySelector('canvas');
	var c = canvas.getContext('2d');
	canvas.width = window.innerWidth; //Setting the canvas to full width of the window
	canvas.height = window.innerHeight; //Setting the canvas to full height of the window
	
	//Drawing outline boxes
		c.beginPath();
		c.lineWidth="10";
		c.strokeStyle="#006599";
		c.rect(150,50,1000,600);
		c.closePath();
		c.stroke();
		function draw(lw,ss,x1,y1,x2,y2) //function for generalized drawing
			{
				c.beginPath();
			c.lineWidth=lw;
			c.StrokeStyle=ss;
			c.moveTo(x1,y1);
			c.lineTo(x2,y2);
			c.closePath();
			c.stroke();
			}
		draw("3","#006599",350,50,350,650);
		draw("1","#006599",200,105,305,105);
		c.font="25px Arial";
		c.fillStyle="#006599";
		c.fillText("Reynolds",200,100);
		c.stroke();

		function heading(id)  //function for replacing the heading as per user selection
			{
				var x=id.name;
				var h=document.getElementById("heading");
				h.innerHTML=x;
			}
		draw("3","#767676",390,240,390,450);
		c.beginPath();
		c.lineWidth="3";
		c.strokeStyle="#767676";
		c.moveTo(390,240);
		c.lineTo(390,450);
		c.lineTo(620,450);
		c.lineTo(620,405);
		c.lineTo(985,405);
		c.lineTo(985,360);
		c.lineTo(620,360);
		c.lineTo(620,240);
		c.stroke();
		c.closePath();
		c.fillStyle="#0099FF";
		c.fillRect(391,291,228,158);
		c.fillRect(615,360,295,44);
		var k=0;
		var m=0;
		for(j=0;298+m<445;j++)
			{ 
				k=0;
				for(i=0;408+k<620;i++)
				{    
					c.beginPath();
					c.strokeStyle="white";
					c.lineWidth="2";
					c.moveTo(398+k,298+m);
					c.lineTo(408+k,298+m);
					c.stroke();
					c.closePath();
					k=k+20;
					  
				  }
				m=m+15;
			}
			m=0;
			for(j=0;373+m<403;j++)
				{ 
					k=0;
					for(i=0;408+k<926;i++)
						{    
						  c.beginPath();
						  c.strokeStyle="white";
						  c.lineWidth="2";
						  c.moveTo(398+k,373+m);
						  c.lineTo(408+k,373+m);
						  c.stroke();
						  c.closePath();
						  k=k+20;
  
						}
					m=m+15;
				}
	c.beginPath();
	c.strokeStyle="black";
	c.lineWidth="1";
	c.moveTo(465,240);
	c.lineTo(465,324);
	c.lineTo(490,349);
	c.lineTo(490,394);
	c.lineTo(580,394);
	c.lineTo(599,387);
	c.lineTo(580,380);
	c.lineTo(510,380);
	c.lineTo(510,349);
	c.lineTo(535,324);
	c.lineTo(535,270);
	c.lineTo(465,270);
	c.fillStyle="#333333";
	c.fill();
	c.lineTo(535,270);
	c.lineTo(535,240);
	c.stroke();
	c.closePath();
	c.beginPath();
	c.moveTo(900,404);
	c.lineTo(910,381.5);
	c.lineTo(900,359);
	c.lineTo(920,359);
	c.lineTo(910,381.5);
	c.lineTo(920,404);
	c.lineTo(900,404);
	c.lineTo(900,404);
	c.fill();
	c.closePath();
	c.stroke();