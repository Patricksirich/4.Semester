import unittest
from circle import area
from math import pi

class TestCircle(unittest.TestCase):
    
    def test_if_area_is_positive(self):
        
        # Test when area is larger than 0
        self.assertAlmostEqual(area(1), pi)
        self.assertAlmostEqual(area(0), 0.0)
        self.assertAlmostEqual(area(2.2), pi*2.2**2)

    def test_values(self):
            self.assertRaises(ValueError, area, -2)