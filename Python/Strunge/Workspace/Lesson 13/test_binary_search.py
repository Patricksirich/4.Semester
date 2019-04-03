# Create unitest for the binary_search example from earlier.
import unittest
from binary_search import bisect_search


class TestBinarySearch(unittest.TestCase):

    def test_only_one_element(self):
        self.assertEqual(bisect_search([1], 1), True)



