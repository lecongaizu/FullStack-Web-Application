package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.respository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("api/v1/")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRespository;

	// get all employees 
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {
		return employeeRespository.findAll();
	}
	
	// Create new employee rest API
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRespository.save(employee);
		
	}
	
	// get employee by id rest api
	@GetMapping("/employees/{id}")
	public ResponseEntity <Employee> getEmployeeById(@PathVariable Long id) {
		Employee employee = employeeRespository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id:" + id) );
		return ResponseEntity.ok(employee);
	}
	
	//update employee rest api
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee( @PathVariable Long id, @RequestBody Employee employeeDetails) {
		Employee employee = employeeRespository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id:" + id) );
		employee.setFristName(employeeDetails.getFristName());
		employee.setEmailId(employeeDetails.getLastName());
		employee.setEmailId(employeeDetails.getEmailId());
		
		Employee updateEmployee = employeeRespository.save(employee);
		return ResponseEntity.ok(updateEmployee);
	}
	
	// delete employee rest API
	@DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String, Boolean>>  deleteEmployee(@PathVariable Long id) {
		Employee employee = employeeRespository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id:" + id) );

		employeeRespository.delete(employee);
        Map<String, Boolean> response = new HashMap<>();
        
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }		
}
