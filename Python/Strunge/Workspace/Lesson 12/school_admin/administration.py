from school import *

# Create a list of all Courses
courses = [Course('Python', 'S19-PYT'), Course('Artificial Intelligence', 'S19-ART'), Course('Angular', 'S19-ANG')]
student = []

def add_course():
    title = input('Title for the Course: ')
    course_id = input('Course ID: ')
    courses.append(Course(title, course_id))

def remove_course():
    print(courses)
    course_id = input('What Course do you want to remove (Course ID): ')

    for c in courses:
        if course_id == c.course_id:
            courses.pop(c)

# Enroll Students to Courses
def enroll_students():
    try:
        name = input("Enter name: ")
        cpr = input("Enter CPR: ")
    except ValueError as v:
        print(v)
    except TypeError as t:
        print(t)
    student.append(Student(name, cpr))

def remove_students():
    pass


def main():
    enroll_students()

    # print out all enrollments ie. course -> student

if __name__ == "__main__":
    main()