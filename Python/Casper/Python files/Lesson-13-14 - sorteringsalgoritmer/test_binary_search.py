import unittest
from binary_search import bisect_search

class TestBinarySearch(unittest.TestCase):

    #Test if, when the list length is 1, the returned element is the same
    def test_only_one_element(self):
        self.assertEqual(bisect_search([1], 1), True)
        self.assertEqual(bisect_search([1], 2), False)

    #Test if the middle element is the same as the given integer
    def test_middle_element(self):
        self.assertEqual(bisect_search([1, 2, 3, 4, 5], 3), True)
        self.assertEqual(bisect_search([2, 5, 7, 9, 14], 8), False)

    def is_middle_higher_than_e(self):
        self.assertGreater(bisect_search([2, 5, 9, 13], 4), True)
    
