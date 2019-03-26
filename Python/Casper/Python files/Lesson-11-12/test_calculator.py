import unittest
from calculator import Calculator

class TestCalculator(unittest.TestCase):

    def test_types(self):

        calc = Calculator()
        self.assertRaises(ValueError, calc.add, 'Hello')
        self.assertRaises(ValueError, calc.add, [1, 2])
    
    def test_size(self):

        calc = Calculator()
        self.assertRaises(OverflowError, calc.add, 27483590428976538784565794)
        