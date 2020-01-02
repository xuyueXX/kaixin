// **一、选择题**

// ##### 1、分析下段代码输出结果是（B）

// *var* arr = [2, 3, 4, 5, 6];

// *var* sum = 0;

// for (*var* i = 1; i < arr.length; i++) {

//   sum += arr[i];

// }

// *console*.log(sum);

// A．20   B．18   C．14   D．12. 

// ##### 2、以下关于 Function函数对象的说法不正确的是（ D）

// A．函数可有可无返回值

// B．调用函数时传递的参数是实参

// C．函数调用时候，可以用一个变量来接收函数返回值

// D.函数必须要有形式参数

// **2、以下代码运行的结果是输出(B )**

// *var* a = b = 10;

// (*function* () {

//   *var* a = b = 20

// })(); 

// *console*.log(b); 



// A．10   B．20   C．报错   D．undefined



// **3、以下代码运行后的结果是输出( A )**

// *var* a = new Object();

// a.name = "admin";

// *console*.log(a.name); 

// A．admin B．a  C．“admin”   D．[a]

// 4、在 JS中，’1555‘+3 的运行结果是( C )



// A．1558   B．1552   C．15553   D．1553。



// **5、以下代码运行后弹出的结果是( B )**

// *var* a = 888;

// ++a;

// *console*.log(a++);



// A．888   B．889   C．890   D．891



// **6、关于变量的命名规则，下列说法正确的是（ E** ）



// A首字符必须是大写或小写的字母，下划线（_）或美元符（$）
// B．除首字母的字符可以是字母，数字，下划线或美元符
// C．变量名称不能是保留字
// D．长度是任意的
// E．区分大小写

// **7、下列的哪一个表达式将返回值为假（  B** **）**

// A．!(3<=1)
// B．(4>=4)&&(5<=2)
// C．(“a”==“a”)&&(“c”!=“d”)
// D．(2<3)||(3<2)

// **8、下面代码，k的运行结果是（ B** **）**
// *var* i = 0, j = 0;
// for (i < 10; j < 6; i++ , j++) {
//   k = i + j;
// }

// A．16   B．10   C．6   D．12

// **9、下面代码的输出结果为（ D** **）**
// *var* x = 1;
// *function* fn(*n*) {
//   n = n + 1;
// };
// y = fn(x);
// *console*.log(y);

// A．2   B．1   C．3   D．undefined

// **10、 [1, 2, 3, 4].join("0").split("");的执行结果是（ C** **）**
// A．"1,2,3,4"
// B．[1,2,3,4]
// C．[“1”,“0”,“2”,“0”,“3”,“0”,“4”]
// D．”1,0,2,0,3,0,4"
// **11、下面代码的运行结果是（ C** **）**
// *function* fn1() {
//   *alert*(1);
// }
// *console*.log(fn1);
// A．1
// B．alert(1); 
// C．function fn1() { alert(1); }
// D．Undefined

// **12、以下代码运行后，结果为（ B** **）**
// fn1();
// *var* fn1 = *function* (*a*) {
//   *console*.log(a);
// } 

// A．1   B．程序报错   C．alert(1);   D．undefined

// **13、 var* n = "miao wei ke tang".indexOf("wei", 6);n的值为：（ A**  **）**
// A．-1  
// B．5 
// C．程序报错
// D．-10

// **14、下面对 substring()方法描述不正确的是（ C）**
// A．一共有两个参数，省略第二个参数表示从参数开始位置提、截取到字符串结束。
// B．提取之前会比较两个参数的大小，并根据大小调整位置。
// C．可以接收负数参数，负数表示从后往前数字符位置。
// D．如果没有设置参数，直接返回整个字符串。

// **15、回答以下代码，alert的值输出分别是多少?( B)**
//   var a = 100;  function test(){  alert(a);  var a = 10;  alert(a);  }  test();  
// A、100，10  B、undefined，10   C、10，10   D、报错

// **17、回答以下代码，alert 的值输出分别是多少？(A )**
//   <script>   var a = 100;   function test() {    alert(a);    a = 10;    alert(a);   }   test();   alert(a);  </script>  
// A.100 10 10     B. 10 100 10  
// C .10 10 100     D.100 100 100
// **18、以下程序运行结束正确的是（B）**
//   var i = 10;  i++;  console.log(i);  var y = i++;  console.log(y);  y = ++i;  console.log(y);  y += 10;  console.log(y);  

// A.10 11 13 23   B. 11 11 13 23
// C.10 12 13 23   D.11 12 13 23

// **19.** **下列代码的执结果是( A )**
// function funcSwitch(sFlag) { 
//  switch (sFlag) 
//  { 
//   case 'Test1': alert('Test1'); break; 
//   case 'Test2': alert('Test2'); break;
//    default: ;
//   } 
//  }


// funcSwitch('Test2');

// **A.** **Test2   B. Test1    C.undefined   D. null**


// **20.下列代码的运行结果是( a)**
// var cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
// var i = 2, len = cars.length;
// for (; i < len; i++) {
//  console.log(cars[i]);
// }
// A、SaabFord    B、 SaabVolvo
// C、 VolvoBMW   D、FordBMW


// **二、简答题**
// 1. js数据类型有哪些，怎么判断一个变量的数据类型？
// 简单的数据类型：数字number，字符串string, 布尔值boolean, undefined, null
// 复杂的数据类型：Array数组,Object对象

// 可以通过typeof, 但是只能判断简单的数据类型，不能判断复杂数据类型

// 2. 列举数组中常用的5个方法，并说明各自的作用？
// .reverse()反转数组
// .push(新元素)在末尾添加新元素
// .pop()删除末尾元素
// .shift()删除数组最前面的元素
// .unshift(新元素)在开头添加新元素
// .indexof(元素) 查找某个元素在数组中的位置，如果存在，就返回该元素当前下标，如果不存在，返回-1
// .splice(start, 删除几个, 在删除的位置插入)
// .slice()拷贝数组，切割数组（返回 开始索引 到 结束索引的前一个）
// .concat()合并多个数组
// .forEach()遍历数组
// .includes()判断一个数组是否包含一个指定的值，返回布尔值
// .join()用分隔符连起来的字符串
// .sort()对元素进行排序

// 3. javascript中的循环有哪些，while循环和do...while的区别是什么？
// for 循环  while循环  do…while循环
// do…while实现执行一次再进行判断是否继续执行
// while是先进行判断是否符合条件


// 4. javascript中的‘+’有几层含义，分别是什么？
// 1.字符串的拼接符
// 2.两边都为数字类型时，此时+号代表数字运算相加
// 3．+ 可以进行数据的隐式转换，给一个String类型的数据前面加上+，就会把这个字符串隐式转换为数字

// 5. js中break 和 continue 的区别是什么？
// break是跳出整个循环
// continue是仅跳过本次循环


// 6. 列举目前你遇到undefined的情况？
// 1. 声明变量没有赋值
// 2. 函数没有return返回值
// 3. 数组元素下标/字符串 超出数组/字符串范围
// 4. 调用对象不存在的属性

// 7. 产生一个10-50的随机数(包含10也包含50)?
// Math.floor(Math.random()*(m-n+1)+n)


// 8. 列举5个字符串的方法，并说明各自的作用？
// .charAt(index)
// .charCodeAt(index)
// .indexof(被查找的字符，从那个索引开始)
// .trim()去掉前后的空格
// .substr()截取
// .replace(您要替换的字符，替换为的字符)替换
// .slice()截取，不会改变原字符串
// .split()分隔，返回分隔完字符串的数组


// 9. join()和split()的区别是什么？
// 将一个数组的每个元素之间添加分隔符，返回一个字符串
// 把一个字符串分割为字符串数组

// 10.定义一个人的对象，属性有：名字，年龄，性别，方法是：吃饭，把人的名字在控制台打印出来，将人的性别这个属性进行删除？
// var num = {
//   name: "dong",
//   gender: "man",
//   eat: function eat() {

//   }
// }
// console.log(num.name);
// delete num.gender;
// console.log(num);
