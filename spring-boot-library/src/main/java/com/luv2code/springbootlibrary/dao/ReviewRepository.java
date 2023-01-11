package com.luv2code.springbootlibrary.dao;

//entity is to define all variables
// dao is to define all interfaces

import com.luv2code.springbootlibrary.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

//Long is a primary key for review entity
public interface ReviewRepository extends JpaRepository<Review, Long> {

    Page<Review> findByBookId(@RequestParam("book_id") Long bookId, Pageable pageable);
}
