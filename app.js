import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

import { firebaseConfig } from "./firebase-config.js";


/* Firebase */

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const expensesRef = collection(
  db,
  "expenses"
);


/* Elements */

const form =
  document.getElementById("expenseForm");

const titleInput =
  document.getElementById("title");

const amountInput =
  document.getElementById("amount");

const categoryInput =
  document.getElementById("category");

const dateInput =
  document.getElementById("date");

const tableBody =
  document.getElementById("expenseTableBody");

const totalExpenses =
  document.getElementById("totalExpenses");

const totalAmount =
  document.getElementById("totalAmount");

const monthAmount =
  document.getElementById("monthAmount");

const avgDailyAmount =
  document.getElementById("avgDailyAmount");

const avgDailyText =
  document.getElementById("avgDailyText");

const expenseTrend =
  document.getElementById("expenseTrend");

const amountTrend =
  document.getElementById("amountTrend");

const monthTrend =
  document.getElementById("monthTrend");

const message =
  document.getElementById("message");

const submitBtn =
  document.getElementById("submitBtn");

const formHeading =
  document.getElementById("formHeading");

const cancelEditBtn =
  document.getElementById("cancelEditBtn");

const searchInput =
  document.getElementById("searchInput");

const categoryFilter =
  document.getElementById("categoryFilter");

const connectionStatus =
  document.getElementById("connectionStatus");

const resultCount =
  document.getElementById("resultCount");


let expenses = [];

let editingId = null;


/* Default date */

dateInput.value =
  new Date()
    .toISOString()
    .split("T")[0];


/* Currency */

function formatCurrency(value) {

  return new Intl.NumberFormat(
    "en-PK",
    {
      style: "currency",
      currency: "PKR",
      maximumFractionDigits: 2
    }
  )
    .format(Number(value) || 0)
    .replace("PKR", "Rs");

}


/* Messages */

function showMessage(
  text,
  type = ""
) {

  message.textContent = text;

  message.className =
    `message ${type}`.trim();

  if (text) {

    setTimeout(() => {

      if (
        message.textContent === text
      ) {

        message.textContent = "";

        message.className =
          "message";

      }

    }, 3500);

  }

}


/* Reset form */

function resetForm() {

  form.reset();

  dateInput.value =
    new Date()
      .toISOString()
      .split("T")[0];

  editingId = null;

  formHeading.textContent =
    "Add New Expense";

  submitBtn.innerHTML =
    "<span>＋</span> Add Expense";

  cancelEditBtn.classList.add(
    "hidden"
  );

}


/* Security */

function escapeHtml(value) {

  return String(value)

    .replaceAll(
      "&",
      "&amp;"
    )

    .replaceAll(
      "<",
      "&lt;"
    )

    .replaceAll(
      ">",
      "&gt;"
    )

    .replaceAll(
      '"',
      "&quot;"
    )

    .replaceAll(
      "'",
      "&#039;"
    );

}


/* Render expenses */

function renderExpenses() {

  const searchTerm =
    searchInput.value
      .trim()
      .toLowerCase();

  const category =
    categoryFilter.value;


  const filtered =
    expenses.filter((expense) => {

      const combined =
        `${expense.title}
        ${expense.category}
        ${expense.date}`
          .toLowerCase();

      return (
        combined.includes(searchTerm) &&
        (
          !category ||
          expense.category === category
        )
      );

    });


  resultCount.textContent =
    `Showing ${filtered.length} of ${expenses.length} expense${
      expenses.length === 1
        ? ""
        : "s"
    }`;


  if (!filtered.length) {

    tableBody.innerHTML = `

      <tr>

        <td
          colspan="6"
          class="empty-state"
        >

          ${
            searchTerm || category
              ? "No matching expenses found."
              : "No expenses yet. Add your first expense above."
          }

        </td>

      </tr>

    `;

    return;

  }


  tableBody.innerHTML =
    filtered
      .map(
        (expense, index) => `

      <tr>

        <td>
          ${index + 1}
        </td>


        <td>

          <div class="title-cell">

            <span class="title-icon">
              ▧
            </span>

            ${escapeHtml(
              expense.title
            )}

          </div>

        </td>


        <td class="amount">

          ${formatCurrency(
            expense.amount
          )}

        </td>


        <td>

          <span class="category-badge">

            ✈

            ${escapeHtml(
              expense.category
            )}

          </span>

        </td>


        <td class="date-cell">

          <span>
            □
          </span>

          ${escapeHtml(
            expense.date
          )}

        </td>


        <td>

          <div class="action-group">

            <button
              class="action-btn edit-btn"
              data-action="edit"
              data-id="${expense.id}"
            >
              ✎ Edit
            </button>


            <button
              class="action-btn delete-btn"
              data-action="delete"
              data-id="${expense.id}"
            >
              ▢ Delete
            </button>

          </div>

        </td>

      </tr>

    `
      )
      .join("");

}


/* Statistics */

function updateStats() {

  const total =
    expenses.reduce(
      (sum, expense) =>
        sum +
        Number(
          expense.amount || 0
        ),
      0
    );


  const currentMonth =
    new Date()
      .toISOString()
      .slice(0, 7);


  const monthExpenses =
    expenses.filter(
      (expense) =>
        String(
          expense.date || ""
        ).startsWith(
          currentMonth
        )
    );


  const monthTotal =
    monthExpenses.reduce(
      (sum, expense) =>
        sum +
        Number(
          expense.amount || 0
        ),
      0
    );


  const days =
    Math.max(
      1,
      new Date().getDate()
    );


  const avgDaily =
    monthTotal / days;


  totalExpenses.textContent =
    expenses.length;


  totalAmount.textContent =
    formatCurrency(total);


  monthAmount.textContent =
    formatCurrency(monthTotal);


  avgDailyAmount.textContent =
    formatCurrency(avgDaily);


  avgDailyText.textContent =
    `Based on ${
      monthExpenses.length
    } expense${
      monthExpenses.length === 1
        ? ""
        : "s"
    }`;


  expenseTrend.textContent =
    `+${monthExpenses.length} this month ↑`;


  amountTrend.textContent =
    `+${formatCurrency(
      monthTotal
    )} this month ↑`;


  monthTrend.textContent =
    `+${formatCurrency(
      monthTotal
    )} this month ↑`;

}


/* Add / Update */

form.addEventListener(
  "submit",
  async (event) => {

    event.preventDefault();


    const title =
      titleInput.value.trim();

    const amount =
      Number(
        amountInput.value
      );

    const category =
      categoryInput.value;

    const date =
      dateInput.value;


    if (
      !title ||
      !Number.isFinite(amount) ||
      amount <= 0 ||
      !category ||
      !date
    ) {

      showMessage(
        "Please fill all fields correctly.",
        "error"
      );

      return;

    }


    submitBtn.disabled = true;


    try {

      const payload = {

        title,

        amount,

        category,

        date,

        updatedAt:
          serverTimestamp()

      };


      if (editingId) {

        await updateDoc(
          doc(
            db,
            "expenses",
            editingId
          ),
          payload
        );


        showMessage(
          "Expense updated successfully.",
          "success"
        );

      } else {

        await addDoc(
          expensesRef,
          {
            ...payload,

            createdAt:
              serverTimestamp()
          }
        );


        showMessage(
          "Expense added successfully.",
          "success"
        );

      }


      resetForm();


    } catch (error) {

      console.error(error);

      showMessage(
        `Operation failed: ${error.message}`,
        "error"
      );


    } finally {

      submitBtn.disabled = false;

    }

  }
);


/* Cancel edit */

cancelEditBtn.addEventListener(
  "click",
  resetForm
);


/* Edit / Delete */

tableBody.addEventListener(
  "click",
  async (event) => {

    const button =
      event.target.closest(
        "button[data-action]"
      );


    if (!button) return;


    const id =
      button.dataset.id;


    const selected =
      expenses.find(
        (expense) =>
          expense.id === id
      );


    if (!selected) return;


    /* EDIT */

    if (
      button.dataset.action ===
      "edit"
    ) {

      editingId = id;


      titleInput.value =
        selected.title;


      amountInput.value =
        selected.amount;


      categoryInput.value =
        selected.category;


      dateInput.value =
        selected.date;


      formHeading.textContent =
        "Edit Expense";


      submitBtn.innerHTML =
        "<span>✓</span> Update Expense";


      cancelEditBtn.classList.remove(
        "hidden"
      );


      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });


      return;

    }


    /* DELETE */

    if (
      button.dataset.action ===
      "delete"
    ) {

      const confirmed =
        window.confirm(
          `Delete "${selected.title}"?`
        );


      if (!confirmed) return;


      try {

        await deleteDoc(
          doc(
            db,
            "expenses",
            id
          )
        );


        showMessage(
          "Expense deleted successfully.",
          "success"
        );


        if (
          editingId === id
        ) {

          resetForm();

        }


      } catch (error) {

        console.error(error);

        showMessage(
          `Delete failed: ${error.message}`,
          "error"
        );

      }

    }

  }
);


/* Search */

searchInput.addEventListener(
  "input",
  renderExpenses
);


/* Category filter */

categoryFilter.addEventListener(
  "change",
  renderExpenses
);


/* Firestore */

const expensesQuery =
  query(
    expensesRef,
    orderBy(
      "date",
      "desc"
    )
  );


onSnapshot(

  expensesQuery,

  (snapshot) => {

    expenses =
      snapshot.docs.map(
        (item) => ({
          id: item.id,
          ...item.data()
        })
      );


    updateStats();

    renderExpenses();


    connectionStatus.textContent =
      "Firestore connected";


    connectionStatus.className =
      "status-pill connected";

  },


  (error) => {

    console.error(
      "Firestore listener error:",
      error
    );


    connectionStatus.textContent =
      "Firestore error";


    connectionStatus.className =
      "status-pill error";


    tableBody.innerHTML = `

      <tr>

        <td
          colspan="6"
          class="empty-state"
        >

          Could not load expenses.
          Check Firebase configuration
          and Firestore rules.

        </td>

      </tr>

    `;


    showMessage(
      "Firebase connection failed. Check the console for details.",
      "error"
    );

  }

);
/* =========================
   SETTINGS
========================= */

const settingsFirebaseStatus =
  document.getElementById(
    "settingsFirebaseStatus"
  );

const darkModeToggle =
  document.getElementById(
    "darkModeToggle"
  );


/* Firebase status inside Settings */

function updateSettingsFirebaseStatus(
  connected
) {

  if (!settingsFirebaseStatus) {
    return;
  }

  if (connected) {

    settingsFirebaseStatus.textContent =
      "Firestore connected";

  } else {

    settingsFirebaseStatus.textContent =
      "Connection error";

  }

}


/* Dark mode */

if (darkModeToggle) {

  const savedTheme =
    localStorage.getItem(
      "expenseTrackerTheme"
    );


  if (savedTheme === "dark") {

    document.body.classList.add(
      "dark-mode"
    );

    darkModeToggle.checked = true;

  }


  darkModeToggle.addEventListener(
    "change",
    () => {

      if (
        darkModeToggle.checked
      ) {

        document.body.classList.add(
          "dark-mode"
        );

        localStorage.setItem(
          "expenseTrackerTheme",
          "dark"
        );

      } else {

        document.body.classList.remove(
          "dark-mode"
        );

        localStorage.setItem(
          "expenseTrackerTheme",
          "light"
        );

      }

    }
  );

}


/* Update settings Firebase status */

updateSettingsFirebaseStatus(true);