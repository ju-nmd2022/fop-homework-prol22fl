background(255, 255, 255);

//hair
noStroke(0, 0, 0);
fill(169, 149, 123);
beginShape();
vertex(293, 290);
bezierVertex(290, 108, 270, 100, 210, 108);
bezierVertex(318, 163, 210, 106, 180, 300);
endShape();

beginShape();
vertex(400, 300);
bezierVertex(290, 108, 470, 100, 210, 108);
bezierVertex(170, 135, 210, 106, 180, 300);
endShape();

//head
fill(225, 198, 153);
noStroke(0, 0, 0);
ellipse(300, 200, 150, 156);
fill(0, 0, 0);

fill(169, 149, 123);
beginShape();
vertex(258, 131);
bezierVertex(150, 140, 232, 258, 220, 250);
endShape();

//nose
fill(217, 179, 130);
triangle(303, 207, 290, 211, 293, 158);

//left eye
fill(255, 255, 255);
noStroke(0, 0, 0);
ellipse(267, 173, 40, 35);

fill(0, 128, 0);
ellipse(270, 173, 25, 30);

fill(255, 255, 255);
ellipse(277, 173, 10, 15);

fill(255, 255, 255);
ellipse(271, 166, 4);

//right eye
fill(255, 255, 255);
ellipse(327, 173, 40, 35);

fill(0, 128, 0);
ellipse(330, 173, 25, 30);

fill(255, 255, 255);
ellipse(337, 173, 10, 15);

fill(255, 255, 255);
ellipse(332, 165, 4);

//left eyebrow
stroke(15);
fill(36, 36, 36);
line(250, 145, 285, 135);

//right eyebrow
stroke(15);
fill(36, 36, 36);
line(320, 135, 355, 145);

//smile
fill(255, 255, 255);
noStroke(0, 0, 0);
beginShape();
vertex(332, 234);
bezierVertex(285, 270, 245, 260, 252, 230);
endShape();

//blush
fill(241, 171, 185);
rect(330, 210, 15, 7, 5);

fill(241, 171, 185);
rect(250, 210, 15, 7, 5);
