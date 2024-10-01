export const sample = [
  {
    role: "user",
    content: "why is the sky blue?",
  },
  {
    role: "assistant",
    content:
      "Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?",
  },
  {
    role: "user",
    content: "why is the sky blue?",
  },
  {
    role: "assistant",
    content:
      "Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?",
  },
  {
    role: "user",
    content: "why is the sky blue?",
  },
  {
    role: "assistant",
    content:
      "Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?Hello! How are you today?",
  },
  {
    "role": "user",
    "content": "하단까지 scroll 하는 javascript 코드는 무엇이 있을까요?"
  },
  {
    "role": "assistant",
    "content": "하단까지 스크롤하는 JavaScript 함수를 작성해 보겠습니다.\n\n```javascript\nwindow.onscroll = function() {\n  var scrolled = window.scrollY;\n  \n  if (scrolled \u003e= document.body.scrollHeight - window.innerHeight * 0.6) {\n    alert('하단까지 스크롤되었습니다.');\n  }\n};\n```\n\n하지만, 위의 코드는 하단까지 스크롤된 경우에만 알림을 띄우는 간단한 예시입니다. 실제로 사용할 때는 조건을 바꾸거나 더 많은 기능을 추가하는 것을 추천합니다.\n\n이외에도, 이 기능을 구현할 수 있는 또 다른 방법은 아래와 같습니다.\n\n```javascript\nwindow.addEventListener('scroll', function() {\n  if (document.body.scrollHeight - window.innerHeight \u003c= window.scrollY + window.innerHeight) {\n    alert('하단까지 스크롤되었습니다.');\n  }\n});\n```\n\n이 코드도 하단까지 스크롤된 경우에만 알림을 띄우며, scroll event를 이용해 스크롤의 진행 상황을 감시합니다."
},
];
