/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // define regex for searching digits in ( ) like file(1) image(2)
  const regex = new RegExp('\\(\\d+\\)$', 'g');

  // make empty buffer array
  const buffer = [];

  names.forEach((name) => {
    // if buffer does not include filename, push it
    if (!buffer.includes(name)) {
      buffer.push(name);
    } else {
      let count = 0;
      // run through all elements in buffer
      // and compare current name with each element without digits-in-( )
      // if we have the same name, increase counter
      buffer.forEach((el) => (el.replace(regex, '') === name ? count++ : null));
      // if we get 0, it means that our filename equals to element WITH digits-in-( )
      if (!count) {
        // then compare each element with name again
        buffer.forEach((el) => (el === name ? count++ : null));
        // and add postfix with needed number in ( )
        buffer.push(`${name}(${count})`);
      } else {
        // if we get not 0, just add number of repetition
        buffer.push(`${name}(${count})`);
      }
    }
  });

  // console.log(buffer);
  return buffer;
}
// renameFiles(['file', 'file(1)', 'file(1)', 'file(1)', 'file(1)', 'file']);
module.exports = renameFiles;
