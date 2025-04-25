function getListStudentIds(listStudents) {
  if (!Array.isArray(listStudents)) {
    return [];
  }

  return listStudents.map(function(student) {
    return student.id;
  });
}

export default getListStudentIds;
