package com.example;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class SimpleCORSFilter implements Filter{

	private final Logger log = LoggerFactory.getLogger(SimpleCORSFilter.class);
	public SimpleCORSFilter()
	{
		log.info("Init"); 
	}
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;
		
		res.setHeader("Access-Control-Allow-Origin",req.getHeader("Origin"));
		res.setHeader("Access-Control-Allow-Credentials","true");
		res.setHeader("Access-Control-Allow-Methods","POST, GET, OPTIONS, DELETE ,PUT");
		res.setHeader("Access-Control-Max-Age","3000");
		res.setHeader("Access-Control-Allow-Headers","Content-Type, Accept, X-Requested-With, remember-me");
		
		chain.doFilter(request, response);
	}

}