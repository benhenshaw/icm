// Cyberfeminist Manifesto Generator
// By Isabella Maund

var current_string = "";
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct=0;
var questions = [
	["How do you identify?", "Female", "Male", "Neither"],
	["Are you politically active online?", "Yes", "No", "Sometimes"],
	["Are you a feminist.", "Yes", "No", "I am an equalist"],
	["Would you consider yourself:", "Radical", "Liberal", "Neutral"],
	["Who/what is your internet adversary?", "Censorship", "Other Users", "Lack of moderation"],
	["How do you measure success?", "In numbers", "In results", "In oneself"],
	["Do you think the internet divides or unites people?", "Divides","Unites", "Neither"],
];
function _(x) { return document.getElementById(x); }

function renderQuestion() {
	test = _("test");
	if (pos >= questions.length) {
		test.innerHTML = current_string;
		_("test_status").innerHTML = "Manifesto Compiled";
		pos = 0;
		correct= 0;
		return false;
	}
	_("test_status").innerHTML = "Question " + (pos+1) + " of " + questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	test.innerHTML = "<h3>" + question + "</h3>";
	test.innerHTML += "<input type = 'radio' name = 'choices' value= 'A'> " + chA + "<br>";
	test.innerHTML += "<input type = 'radio' name = 'choices' value= 'B'> " + chB + "<br>";
	test.innerHTML += "<input type = 'radio' name = 'choices' value= 'C'> " + chC + "<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer() {
	choices = document.getElementsByName("choices");
	for (var i = 0; i < choices.length; i++) {
		if (choices[i].checked) {
			choice = choices[i].value;
		}
	}
	if (choice) {
		pos++;
		correct++;
		if ((parseInt(pos) == 1) && (choice == "A"))
			current_string += "I believe in gender, both online and offline.";
		else if ((parseInt(pos) == 1) && (choice == "B"))
			current_string += "I believe in gender, both online and offline.";
		else if ((parseInt(pos) == 1) && (choice == "C"))
			current_string += "I believe in a gendlerless society, both online and offline."
		else if ((parseInt(pos) == 2) && (choice == "A"))
			current_string += " The internet is a place for communication where politics and ideology can be discussed and assessed.";
		else if ((parseInt(pos) == 2) && (choice == "B"))
			current_string += " The internet is not always a place for politics. It is often an echo chamber, with those who 'shout' the loudest representing the majority. It is not always safe or accessible to be politically active online.";
		else if ((parseInt(pos) == 2) && (choice == "C"))
			current_string += " The internet is a place for opinions. It is a platform for discussing politics and ideology, but it does not always represent individuals. This is because the internet is not always an accessible platform and may not be a safe place to be politically active.";
		else if ((parseInt(pos) == 3) && (choice == "A"))
			current_string += " I believe in feminism, the notion that people of all genders, races and backgrounds deserve equal respect and representation.";
		else if ((parseInt(pos) == 3) && (choice == "B"))
			current_string += " I do not believe that people of all genders, races and cultures deserve equal respect and representation.";
		else if ((parseInt(pos) == 3) && (choice == "C"))
			current_string += " I believe in equality. All people of all genders, races and cultures deserve equal respect and representation.";
		else if ((parseInt(pos) == 4) && (choice == "A"))
			current_string += " I believe in radical politics. Without extreme stances few significant changes will be made, and the real issues will not be targeted. There should be places for everyone to feel safe, both online and offline, i.e. internet platforms for women only.";
		else if ((parseInt(pos) == 4) && (choice == "B"))
			current_string += " I am liberal and so I believe that everyone should have the freedom to express their political beliefs online and offline. Everyone has a right to be involved in a political belief or movement.";
		else if ((parseInt(pos) == 4) && (choice == "C"))
			current_string += " I belive in balance. The extremes of being radical or liberal will not achieve as much as being a medium between both.";
		else if ((parseInt(pos) == 5) && (choice == "A"))
			current_string += " Censorship online takes away the freedoms that the internet should provide. The internet should be a space of free expression that is not controlled by any government, business or authority. I have been oppressed/silenced by internet censorship, and/or I have witnessed this oppression/silencing and it has contributed to maintaining dated political ideas.";
		else if ((parseInt(pos) == 5) && (choice == "B"))
			current_string += " The main issue I face online are other users. I have experienced hate speech, discrimination and appropriation online. There are too many individuals that have a disproportionate amount of influence online and there is an overall lack of respect for others online.";
		else if ((parseInt(pos) == 5) && (choice == "C"))
			current_string += " There should be more censorship online. Individuals who have strong influence, such as youtubers and bloggers should be moderated even more strongly due to their influence on sometimes young and impressionable viewers. Individuals spreading bigotry and hate speech should be silenced and should not be allowed to use the internet as a platform for spreading ignorance.";
		else if ((parseInt(pos) == 6) && (choice == "A"))
			current_string += " Success can be measured definitively. In politics you can measure success based on how many people identify and follow your political party or belief. In feminism this is shown through how many people are a part of the movement and are taking steps to make a change.";
		else if ((parseInt(pos) == 6) && (choice == "B"))
			current_string += " Success is measured based on results. A political movement is only successful once it has achieved the goals of its party. Once these goals have been achieved it can be considered successful. Similarly political movements online are only successful once they have achieved their online and offline goals.";
		else if ((parseInt(pos) == 6) && (choice == "C"))
			current_string += " Success can only be measured on an individual basis. If as an individual you follow a political movement or belief system that fully reflects your needs and beliefs, that you can whole heartedly support and rally for, then this political movement or belief system has been successful. Measuring success numerically is a very capitalist way of thinking and does not accurately reflect real successes.";
		else if ((parseInt(pos) == 7) && (choice == "A"))
			current_string += " Finally, there will always be a divide online due to the nature of the internet. This is something that may be possible to overcome, but it is the nature of humankind to judge and categorise people based on their gender, race and class.";
		else if ((parseInt(pos) == 7) && (choice == "B"))
			current_string += " Finally, The internet is a unique place where users can have the opportunity to be represented, regardless of gender, race and class. It is a platform that allows for communication between individuals who without the internet may have never shared their beliefs, experiences and opinions.";
		else if ((parseInt(pos) == 7) && (choice == "C"))
			current_string += " Finally, the internet is a reflection of the offline world. It is a unique platform that allows for communication between individuals who may have previously never been able to speak to one another. However, there is the same amount, or often more ignorance and hate expressed online due to the anonymous nature of the internet.";
		renderQuestion();
	}
}

window.addEventListener("load", renderQuestion, false);
