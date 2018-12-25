// Book Class, respresents a book

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class, handles UI task

class UI {
  static displayBooks() {
    const StoredBooks = [{
        title: 'Book One',
        author: 'Daniel Simpson',
        isbn: '2879773'
      },
      {
        title: 'Book Two',
        author: 'Mark Fox',
        isbn: '0998231'
      }
    ];

    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.getElementById('book-list'); 

    const row = document.createElement('tr');

    row.innerHTML = ` 
      <td>${book.title }</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }
}

// Store Class, Handles Storage

// Event: Display Books

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a book

// Event: Remove a book


