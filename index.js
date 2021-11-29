
function colorChange() {
  var color = ["#ffffff", "#FF8299", "#FF8C00", "#FFFF00", "#50BCDF", "#BFFF00"];
  var num = Math.floor(Math.random() * color.length);
  var bodyTag = document.getElementById("all");
  bodyTag.style.backgroundColor = color[num];
}

function schoolquiz() {
  let quiz = prompt('국어는?');
  if (quiz.includes('수선')) alert('어머 혹시 거캠학생이신가요?');
  else alert('놉~');

  let quiz2 = prompt('수학은?');
  if (quiz2.includes('몰라')) alert('정답~');
  else if (quiz2.includes('기린')) alert('지금은 아니시지롱')
  else alert('좀 더 공부합시다!')

  let quiz3 = prompt('과학은?')
  if (quiz3.includes('기린')) alert('굳');
  else alert('땡');

  let quiz4 = prompt('사회는 누구?');
  if (quiz4.includes('도령')) alert('빙고');
  else if (quiz4.includes('쩜백')) alert('gooood');
  else alert('틀렸지유');

  let quiz5 = prompt('영어는 누구?');
  if (quiz5.includes('예티')) alert('너무 잘하신다~');
  else if (quiz5.includes('히치')) alert('좋아');
  else alert('노력하자..');

  let quiz6 = prompt('거캠의 얼굴은?')
  if (quiz6 == '에코') alert('현명한 답변이군');
  else if (quiz6 == '벨라') alert('벨라는 머리!');
  else alert('정답!');

}
