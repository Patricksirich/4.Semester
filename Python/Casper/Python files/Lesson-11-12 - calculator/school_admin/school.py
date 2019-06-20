class Student:
    def __init__(self, name, cpr):
        # Name is a string, no numbers are allowed in the string, and name should not be empty
        # Cpr format 'xxxxxx-xxxx' where x is numbers, and is a valid cpr number
        pass


class Course:
    def __init__(self, title, course_id):
        # Title is a String
        # course id is in the right format
        # S19-PYT
        #    * S could also be F (Spring or Fall)
        #    * 19 is the year
        #    * PYT is the first 3 letters in the Course title
        pass


class Enrollment:
    def __init__(self, Student, Course):
        # Make sure the attributes are of the right type
        pass

    def grade_student(self, grade):
        # Grade the student,
        # if student already graded thats it,
        # Grade can not be changed
        pass


if __name__ == "__main__":
    pass
