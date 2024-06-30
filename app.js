function makeWorker() {
  let name = 'Pete';
  return function () {
    alert(name);
  };
}
let name = 'John';
let work = makeWorker();
work(); // alert `Pete` เพราะ work มีค่าเป็นfunction makeWorker() ซึ่งในfunction นี้มีname = `Pete` เป็นlocalอยู่แล้ว และเมื่อalert จะalertแค่ตัวแปรจากfunctionนั้นๆ ไม่เกี่ยวกับglobal variable
