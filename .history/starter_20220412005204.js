<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>to do list</title>
   <link rel="preconnect" href="https://fonts.gstatic.com" />
   <link
     href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
     rel="stylesheet"
   />
   <link
     rel="stylesheet"
     href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
     integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw=="
     crossorigin="anonymous"
   />
   <style>
      html {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
input,
textarea,
select,
button {
  outline: none;
}
input {
  line-height: normal;
}
label,
button {
  cursor: pointer;
}
a {
  text-decoration: none;
}
img {
  display: block;
  max-width: 100%;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
/* using rem unit */
html {
  font-size: 62.5%;
}
a {
  text-decoration: none;
}
img {
  display: block;
  max-width: 100%;
}
input,
button,
body {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 1;
}
.todo {
  padding: 25px;
  margin: 25px auto;
  max-width: 600px;
}
.todo-form {
  width: 100%;
  display: flex;
}
.todo-submit {
  padding: 15px;
  border: 0;
  background-color: #2979ff;
  color: white;
  border-radius: 0 10px 10px 0;
  flex-shrink: 0;
}
.todo-input {
  width: 100%;
  border: 1px solid #eee;
  padding: 15px;
  border-radius: 10px 0 0 10px;
}
.todo-item {
  margin-top: 15px;
  display: flex;
  align-items: center;
  padding: 15px 0;
}
.todo-text {
  flex: 1;
  font-weight: 300;
  color: #333;
  display: inline-block;
  padding-right: 20px;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
}
.todo-remove {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background-color: #fc5776;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
   </style>
</head>
<body>
   <!-- <div class="todo">
       autocomplete off để không gợi ý những input cũ 
      <form class="todo-form" autocomplete="off"> 
         <input type="text" name="todo" placeholder="enter your task" class="todo-input">
         <button class="todo-submit" type="submit">Add</button>
      </form>

      <div class="todo-list">
      </div>
   </div> -->
   <script src="./starter.js"></script>
</body>
</html>