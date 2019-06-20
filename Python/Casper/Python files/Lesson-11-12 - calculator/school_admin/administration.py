from school import *

# Create a list of all Courses
courses = [Course('Python', 'S19-PYT'), Course('Artificial Intelligence', 'S19-ART'), Course('Angular', 'S19-ANG')]

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
    pass

def remove_students():
    pass


def main():

    # print out all enrollments ie. course -> student

if __name__ == "__main__":
    main()