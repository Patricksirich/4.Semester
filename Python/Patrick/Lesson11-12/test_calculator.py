import unittest
from calculater import Calculater


class TestCalculator(unittest.TestCase):
    
    def test_values(self):
        calc = Calculater()
        self.assertRaises(ValueError, calc.add, 'Hello')
        self.assertRaises(ValueError, calc.add, '-')
        self.assertRaises(ValueError, calc.add, '*')
        self.assertRaises(ValueError, calc.add, '/')
        self.assertRaises(ValueError, calc.divide, 'Hello')
        self.assertRaises(ValueError, calc.divide, '+')
        self.assertRaises(ValueError, calc.divide, '*')
        self.assertRaises(ValueError, calc.divide, '-')
        self.assertRaises(ValueError, calc.subtract, 'Hello')
        self.assertRaises(ValueError, calc.subtract, '+')
        self.assertRaises(ValueError, calc.subtract, '*')
        self.assertRaises(ValueError, calc.subtract, '/')
        self.assertRaises(ValueError, calc.multiply, 'Hello')
        self.assertRaises(ValueError, calc.multiply, '+')
        self.assertRaises(ValueError, calc.multiply, '-')
        self.assertRaises(ValueError, calc.multiply, '/')
