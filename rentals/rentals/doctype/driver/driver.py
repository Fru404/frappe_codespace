# Copyright (c) 2025, phrous and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Driver(Document):
	def before_safe(self):
		self.fullname = f"{self.firstname} {self.lastname}"
	
