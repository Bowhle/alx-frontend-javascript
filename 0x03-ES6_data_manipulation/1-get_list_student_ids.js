function getListStudentIds(listStudents) {
  let studentIds = [];
  for (let i = 0; i < listStudents.length; i++) {
    studentIds.push(listStudents[i].id);
  }
  return studentIds;
}

module.exports = getListStudentIds;
