// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRtzFIQm8eav8ygZvOyS8LiPGfxuGyjmk",
  authDomain: "rienglish.firebaseapp.com",
  projectId: "rienglish",
  storageBucket: "rienglish.firebasestorage.app",
  messagingSenderId: "87731746835",
  appId: "1:87731746835:web:85f430b91ae5d841f9a7e6",
  measurementId: "G-5331QHBDZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

        const lessons = {
            1: `
                <h1>Phương pháp 1: Đọc Lướt (Skimming)</h1>

    <h2>A. Khái niệm:</h2>
    <p>Đọc lướt (skimming) là phương pháp đọc nhanh để nắm bắt nội dung chính của văn bản mà không cần phải đi vào chi tiết. Mục tiêu của skimming là giúp người đọc có cái nhìn tổng quát về bài đọc, từ đó xác định được những phần quan trọng hoặc cần chú ý hơn trong quá trình đọc chi tiết.</p>
    <p>Phương pháp này thường sử dụng khi bạn cần nhanh chóng lấy được thông tin quan trọng, đặc biệt khi thời gian có hạn hoặc khi bạn chưa biết rõ các nội dung chi tiết trong bài đọc.</p>

    <h2>B. Khi nào nên sử dụng:</h2>
    <p>Skimming là một kỹ năng quan trọng khi bạn gặp các tình huống sau:</p>
    <ul>
        <li><strong>Khi thời gian có hạn:</strong> Nếu bạn có ít thời gian để làm bài đọc hiểu, phương pháp đọc lướt sẽ giúp bạn nhanh chóng tìm ra nội dung chính, giúp tiết kiệm thời gian mà vẫn nắm bắt được thông tin cơ bản.</li>
        <li><strong>Khi bạn cần tìm hiểu nhanh về chủ đề:</strong> Nếu bạn không biết rõ về chủ đề của bài đọc, skimming sẽ giúp bạn có cái nhìn tổng quan và quyết định xem bài đọc có liên quan đến câu hỏi hay bài tập của bạn không.</li>
        <li><strong>Khi bạn cần nhận diện các thông tin cần thiết:</strong> Đọc lướt giúp bạn xác định những phần của bài đọc mà có thể chứa câu trả lời cho câu hỏi cụ thể hoặc các điểm bạn cần chú ý.</li>
    </ul>

    <h2>C. Các bước sử dụng phương pháp đọc lướt:</h2>
    <ol>
        <li><strong>Đọc tiêu đề và các phần phụ đề:</strong> Tiêu đề, các phần phụ đề (subheadings) hoặc đoạn mở đầu và kết luận thường cung cấp cái nhìn tổng quát về nội dung bài đọc.</li>
        <li><strong>Lướt qua các đoạn văn:</strong> Đọc nhanh những câu mở đầu và câu kết của từng đoạn. Thông thường, câu đầu tiên trong đoạn văn sẽ giới thiệu ý chính của đoạn, còn câu kết luận sẽ tóm tắt lại những gì được trình bày trong đoạn đó.</li>
        <li><strong>Nhìn vào các từ khoá hoặc từ in đậm, in nghiêng:</strong> Các từ này thường là những khái niệm, thuật ngữ hoặc thông tin quan trọng mà bạn cần chú ý.</li>
        <li><strong>Lướt qua các hình ảnh, bảng biểu, và chú thích:</strong> Những yếu tố này thường đi kèm với thông tin bổ sung hoặc tóm tắt nội dung bài đọc.</li>
        <li><strong>Cố gắng tìm ra những ý chính:</strong> Để có được cái nhìn tổng quan nhanh chóng, bạn cần nhận diện những phần của văn bản có thể chứa ý chính hoặc thông tin quan trọng.</li>
    </ol>

    <h2>D. Bài tập mẫu:</h2>
    <h3>Văn bản mẫu:</h3>
    <p><em>The global impact of climate change is an issue that has dominated political and scientific discussions for decades. Increasingly, scientists and policy makers are focused on the long-term effects of rising temperatures and extreme weather events. In the past, many governments were slow to recognize the urgency of the problem, but today, international cooperation and action are seen as crucial to addressing this challenge. Despite progress, much remains to be done, particularly in terms of reducing carbon emissions and transitioning to renewable energy sources.</em></p>

    <h3>Câu hỏi mẫu:</h3>
    <ol>
        <li>What is the main topic of the passage?</li>
        <li>Which groups are primarily concerned with climate change, according to the text?</li>
        <li>How have government actions toward climate change evolved over time?</li>
        <li>What two specific actions are highlighted as necessary for addressing climate change?</li>
        <li>What does the text suggest about the future of climate change efforts?</li>
    </ol>

    <h3>Hướng dẫn giải chi tiết:</h3>
    <ol>
        <li><strong>What is the main topic of the passage?</strong><br>
        Để trả lời câu hỏi này, bạn chỉ cần đọc lướt qua tiêu đề và các câu mở đầu để nhận diện chủ đề chính. Trong văn bản mẫu, câu đầu tiên rõ ràng chỉ ra rằng vấn đề biến đổi khí hậu toàn cầu là vấn đề chính.</li>

        <li><strong>Which groups are primarily concerned with climate change, according to the text?</strong><br>
        Câu đầu tiên và phần sau của văn bản đề cập đến các nhà khoa học và các nhà hoạch định chính sách. Chúng ta có thể kết luận rằng hai nhóm này quan tâm chính đến vấn đề biến đổi khí hậu.</li>

        <li><strong>How have government actions toward climate change evolved over time?</strong><br>
        Đọc lướt câu "In the past, many governments were slow to recognize the urgency of the problem, but today..." sẽ giúp ta hiểu rằng các hành động của chính phủ đã thay đổi theo hướng nhận thức rõ ràng hơn về vấn đề này.</li>

        <li><strong>What two specific actions are highlighted as necessary for addressing climate change?</strong><br>
        Những từ "reducing carbon emissions" và "transitioning to renewable energy sources" xuất hiện trong phần sau của bài đọc, giúp ta xác định được hai hành động quan trọng cần thực hiện.</li>

        <li><strong>What does the text suggest about the future of climate change efforts?</strong><br>
        Câu "much remains to be done" chỉ ra rằng, mặc dù có những tiến bộ nhất định, nhưng vấn đề vẫn còn rất nhiều điều cần giải quyết trong tương lai.</li>
    </ol>

    <h3>Giải thích chi tiết:</h3>
    <p>Skimming giúp bạn dễ dàng nhận diện thông tin quan trọng mà không cần phải đọc toàn bộ văn bản. Việc lướt qua các tiêu đề, câu đầu tiên và câu kết của mỗi đoạn văn giúp bạn nhanh chóng nhận ra nội dung chính mà không mất nhiều thời gian.</p>`,

            2:`<h1>Phương pháp 2: Đọc Chi Tiết (Scanning)</h1>

    <h2>A. Khái niệm:</h2>
    <p>Đọc chi tiết (scanning) là phương pháp đọc nhanh để tìm kiếm một thông tin cụ thể trong văn bản mà không cần phải đọc hết toàn bộ nội dung. Thay vì chú trọng vào việc hiểu tổng thể, phương pháp này tập trung vào việc xác định một chi tiết hoặc thông tin cụ thể mà bạn cần.</p>

    <h2>B. Khi nào nên sử dụng:</h2>
    <p>Phương pháp scanning thích hợp trong các tình huống sau:</p>
    <ul>
        <li><strong>Khi bạn cần tìm một thông tin cụ thể:</strong> Nếu bạn cần tìm một tên, ngày tháng, số liệu, hoặc thông tin nào đó, bạn sẽ sử dụng phương pháp scanning để nhanh chóng tìm ra những chi tiết này.</li>
        <li><strong>Khi làm bài tập có câu hỏi yêu cầu thông tin cụ thể:</strong> Ví dụ, trong bài kiểm tra đọc hiểu, các câu hỏi có thể yêu cầu bạn tìm một từ khóa, hoặc cụ thể hơn là một con số, tên người, sự kiện, hay địa danh.</li>
        <li><strong>Khi không cần đọc toàn bộ bài để hiểu rõ nội dung:</strong> Phương pháp này sẽ giúp bạn tiết kiệm thời gian mà vẫn có thể trả lời các câu hỏi mà không cần đọc từng phần trong văn bản.</li>
    </ul>

    <h2>C. Các bước sử dụng phương pháp đọc chi tiết:</h2>
    <ol>
        <li><strong>Đọc câu hỏi trước:</strong> Trước khi bắt đầu đọc văn bản, bạn nên đọc các câu hỏi trong bài để biết được mình cần tìm kiếm thông tin gì.</li>
        <li><strong>Tìm từ khóa trong văn bản:</strong> Quét qua văn bản và chú ý đến các từ khóa hoặc cụm từ có liên quan đến câu hỏi.</li>
        <li><strong>Dùng mắt di chuyển nhanh qua các đoạn văn:</strong> Bạn không cần phải đọc toàn bộ câu mà chỉ cần tìm các từ hoặc cụm từ quan trọng để trả lời câu hỏi.</li>
        <li><strong>Tìm kiếm thông tin cụ thể:</strong> Xác định những phần có chứa thông tin chính xác, ví dụ, ngày tháng, tên người, hoặc sự kiện quan trọng, sau đó ghi chú lại.</li>
    </ol>

    <h2>D. Bài tập mẫu:</h2>
    <h3>Văn bản mẫu:</h3>
    <p><em>The first manned moon landing took place on July 20, 1969. Neil Armstrong, an astronaut of the NASA Apollo 11 mission, became the first human to set foot on the lunar surface. He famously said, “That’s one small step for man, one giant leap for mankind.”</em></p>

    <h3>Câu hỏi mẫu:</h3>
    <ol>
        <li>When did the first manned moon landing occur?</li>
        <li>Who was the first person to walk on the moon?</li>
        <li>What was the name of the NASA mission?</li>
        <li>What did Neil Armstrong famously say?</li>
        <li>What year did Neil Armstrong set foot on the lunar surface?</li>
    </ol>

    <h3>Hướng dẫn giải chi tiết:</h3>
    <ol>
        <li><strong>When did the first manned moon landing occur?</strong><br>
        Dễ dàng tìm thấy câu trả lời trong câu đầu tiên: "The first manned moon landing took place on July 20, 1969."</li>

        <li><strong>Who was the first person to walk on the moon?</strong><br>
        Câu thứ hai trong văn bản cung cấp câu trả lời rõ ràng: "Neil Armstrong, an astronaut of the NASA Apollo 11 mission..."</li>

        <li><strong>What was the name of the NASA mission?</strong><br>
        Thông tin này có thể được tìm thấy ngay sau tên của Neil Armstrong: "NASA Apollo 11 mission".</li>

        <li><strong>What did Neil Armstrong famously say?</strong><br>
        Câu trực tiếp trong văn bản trả lời: “That’s one small step for man, one giant leap for mankind.”</li>

        <li><strong>What year did Neil Armstrong set foot on the lunar surface?</strong><br>
        Câu đầu tiên đã nêu rõ năm: "1969."</li>
    </ol>

    <h3>Giải thích chi tiết:</h3>
    <p>Khi sử dụng phương pháp scanning, bạn chỉ cần lướt qua văn bản để tìm các từ khóa như "first manned moon landing," "Neil Armstrong," "Apollo 11 mission," và "1969." Mỗi từ khóa này giúp bạn nhanh chóng xác định câu trả lời mà không cần phải đọc kỹ từng phần của văn bản.</p>`,

             3:`
             <h1>Phương pháp 3: Đọc Câu Hỏi Trước (Pre-reading Questions)</h1>

    <h2>A. Khái niệm:</h2>
    <p>Đọc câu hỏi trước (Pre-reading Questions) là phương pháp yêu cầu người đọc xem qua các câu hỏi của bài đọc trước khi bắt đầu đọc văn bản. Điều này giúp người đọc xác định mục tiêu đọc và tìm kiếm thông tin trong văn bản một cách có chủ đích.</p>

    <h2>B. Khi nào nên sử dụng:</h2>
    <p>Phương pháp này hữu ích khi bạn:</p>
    <ul>
        <li><strong>Làm bài tập đọc hiểu:</strong> Trước khi bắt đầu đọc văn bản, việc đọc các câu hỏi sẽ giúp bạn hiểu rõ yêu cầu và biết được thông tin quan trọng cần tìm kiếm trong bài đọc.</li>
        <li><strong>Cần chú ý đến chi tiết quan trọng:</strong> Khi bạn biết trước các câu hỏi, bạn có thể tập trung vào các phần của văn bản mà bạn nghĩ sẽ có câu trả lời.</li>
        <li><strong>Cần tăng tốc độ đọc:</strong> Việc đọc câu hỏi trước giúp bạn xác định các phần trong bài đọc có thể chứa thông tin cần thiết, giúp tiết kiệm thời gian.</li>
    </ul>

    <h2>C. Các bước sử dụng phương pháp đọc câu hỏi trước:</h2>
    <ol>
        <li><strong>Đọc tất cả các câu hỏi:</strong> Trước khi đọc văn bản, hãy đọc tất cả các câu hỏi để hiểu được những gì bạn cần tìm kiếm.</li>
        <li><strong>Tìm từ khóa trong câu hỏi:</strong> Xác định các từ khóa trong câu hỏi và dự đoán nơi nào trong văn bản có thể cung cấp câu trả lời.</li>
        <li><strong>Đọc văn bản với mục tiêu cụ thể:</strong> Khi bạn bắt đầu đọc văn bản, hãy đọc với mục tiêu tìm ra câu trả lời cho các câu hỏi đã được xác định.</li>
        <li><strong>Ghi chú các thông tin quan trọng:</strong> Ghi chú lại các chi tiết bạn nghĩ sẽ giúp trả lời câu hỏi.</li>
    </ol>

    <h2>D. Bài tập mẫu:</h2>
    <h3>Văn bản mẫu:</h3>
    <p><em>The Eiffel Tower, located in Paris, France, is one of the most famous landmarks in the world. Completed in 1889, it was originally constructed as the entrance arch for the 1889 World's Fair. Standing at 324 meters tall, it was the tallest man-made structure in the world until the completion of the Chrysler Building in New York City in 1930.</em></p>

    <h3>Câu hỏi mẫu:</h3>
    <ol>
        <li>Where is the Eiffel Tower located?</li>
        <li>When was the Eiffel Tower completed?</li>
        <li>What was the Eiffel Tower originally built for?</li>
        <li>How tall is the Eiffel Tower?</li>
        <li>When did the Eiffel Tower lose its title as the tallest man-made structure?</li>
    </ol>

    <h3>Hướng dẫn giải chi tiết:</h3>
    <ol>
        <li><strong>Where is the Eiffel Tower located?</strong><br>
        Bạn sẽ thấy thông tin này trong câu đầu tiên của văn bản: "The Eiffel Tower, located in Paris, France..."</li>

        <li><strong>When was the Eiffel Tower completed?</strong><br>
        Câu trả lời có thể được tìm thấy trong câu tiếp theo: "Completed in 1889."</li>

        <li><strong>What was the Eiffel Tower originally built for?</strong><br>
        Câu trả lời có sẵn trong câu thứ ba: "It was originally constructed as the entrance arch for the 1889 World's Fair."</li>

        <li><strong>How tall is the Eiffel Tower?</strong><br>
        Đoạn văn tiếp theo đã cung cấp thông tin về chiều cao của tháp: "Standing at 324 meters tall."</li>

        <li><strong>When did the Eiffel Tower lose its title as the tallest man-made structure?</strong><br>
        Thông tin này có thể tìm thấy trong câu cuối cùng: "It was the tallest man-made structure in the world until the completion of the Chrysler Building in New York City in 1930."</li>
    </ol>

    <h3>Giải thích chi tiết:</h3>
    <p>Bằng cách đọc các câu hỏi trước, bạn có thể nhanh chóng xác định những thông tin quan trọng mà mình cần tìm trong bài đọc. Việc này giúp bạn không bị lạc hướng và có thể đọc văn bản một cách hiệu quả hơn.</p>`,

                4:`
                <h1>Phương pháp 4: Gạch Chân và Ghi Chú (Underline and Annotate)</h1>

    <h2>A. Khái niệm:</h2>
    <p>Phương pháp gạch chân và ghi chú (Underline and Annotate) là kỹ thuật giúp người đọc tập trung vào các thông tin quan trọng trong văn bản bằng cách gạch dưới hoặc làm nổi bật các từ hoặc câu cần chú ý. Việc ghi chú giúp củng cố sự hiểu biết và dễ dàng quay lại các điểm quan trọng khi cần thiết.</p>

    <h2>B. Khi nào nên sử dụng:</h2>
    <p>Phương pháp này hữu ích trong các tình huống sau:</p>
    <ul>
        <li><strong>Khi bạn cần làm rõ các điểm chính:</strong> Việc gạch dưới giúp bạn phân biệt thông tin quan trọng và hỗ trợ trong việc xác định những phần quan trọng của bài đọc.</li>
        <li><strong>Khi bạn muốn ghi nhớ các chi tiết:</strong> Ghi chú và gạch chân giúp bạn ghi nhớ các thông tin quan trọng như từ vựng mới, câu quan trọng, hoặc các chi tiết có thể xuất hiện trong câu hỏi bài tập.</li>
        <li><strong>Khi bạn làm bài kiểm tra hoặc bài thi:</strong> Gạch chân và ghi chú giúp bạn dễ dàng quay lại và kiểm tra những thông tin đã đánh dấu mà không cần phải đọc lại toàn bộ văn bản.</li>
    </ul>

    <h2>C. Các bước sử dụng phương pháp gạch chân và ghi chú:</h2>
    <ol>
        <li><strong>Đọc qua văn bản một lần:</strong> Trước khi bắt đầu gạch chân, bạn nên đọc qua toàn bộ văn bản để nắm được nội dung chính.</li>
        <li><strong>Xác định những thông tin quan trọng:</strong> Tìm các từ khóa, số liệu, thuật ngữ chuyên môn, hoặc các câu thể hiện ý chính của đoạn văn.</li>
        <li><strong>Gạch dưới hoặc làm nổi bật những phần quan trọng:</strong> Gạch dưới những từ hoặc câu mà bạn cho là quan trọng để dễ dàng nhận ra khi cần.</li>
        <li><strong>Ghi chú bên lề:</strong> Viết các chú thích ngắn gọn bên cạnh những phần gạch chân để giải thích hoặc làm rõ nghĩa của từ hoặc câu đó.</li>
    </ol>

    <h2>D. Bài tập mẫu:</h2>
    <h3>Văn bản mẫu:</h3>
    <p><em>Global warming has become one of the most pressing environmental challenges of our time. Scientists have found evidence that the Earth's temperature has risen significantly over the past century. This warming is primarily due to human activities such as the burning of fossil fuels, deforestation, and industrial activities, which have led to an increase in greenhouse gases like carbon dioxide. If global warming continues, it could lead to severe consequences such as rising sea levels, extreme weather conditions, and the loss of biodiversity.</em></p>

    <h3>Câu hỏi mẫu:</h3>
    <ol>
        <li>What is the main topic of the passage?</li>
        <li>What is the primary cause of global warming?</li>
        <li>What are the potential consequences of global warming mentioned in the passage?</li>
        <li>How has the Earth's temperature changed in the past century?</li>
        <li>What are some examples of human activities contributing to global warming?</li>
    </ol>

    <h3>Hướng dẫn giải chi tiết:</h3>
    <ol>
        <li><strong>What is the main topic of the passage?</strong><br>
        Đọc qua văn bản, ta có thể gạch dưới câu mở đầu: "Global warming has become one of the most pressing environmental challenges of our time."</li>

        <li><strong>What is the primary cause of global warming?</strong><br>
        Câu sau cung cấp câu trả lời rõ ràng: "This warming is primarily due to human activities such as the burning of fossil fuels, deforestation, and industrial activities."</li>

        <li><strong>What are the potential consequences of global warming mentioned in the passage?</strong><br>
        Gạch dưới các cụm từ: "rising sea levels," "extreme weather conditions," và "the loss of biodiversity."</li>

        <li><strong>How has the Earth's temperature changed in the past century?</strong><br>
        Câu tiếp theo có chứa thông tin này: "Scientists have found evidence that the Earth's temperature has risen significantly over the past century."</li>

        <li><strong>What are some examples of human activities contributing to global warming?</strong><br>
        Các từ khoá như "burning of fossil fuels," "deforestation," và "industrial activities" là những từ cần ghi chú lại.</li>
    </ol>

    <h3>Giải thích chi tiết:</h3>
    <p>Khi gạch chân và ghi chú, bạn có thể dễ dàng quay lại và xem các thông tin quan trọng một cách nhanh chóng. Việc gạch chân giúp làm nổi bật những phần cốt lõi của văn bản, trong khi ghi chú bên lề giúp bạn hiểu rõ hơn về ý nghĩa của từng phần.</p>`,
    5:`<h1>Phương pháp 5: Sử dụng Ngữ Cảnh (Context Clues)</h1>

    <h2>A. Khái niệm:</h2>
    <p>Phương pháp sử dụng ngữ cảnh (Context Clues) là việc dựa vào các từ, cụm từ, hoặc câu xung quanh một từ mới hoặc một câu khó hiểu để suy đoán nghĩa của nó. Kỹ thuật này giúp bạn không chỉ hiểu nghĩa của từ mới mà còn giúp cải thiện khả năng đọc hiểu tổng thể.</p>

    <h2>B. Khi nào nên sử dụng:</h2>
    <p>Phương pháp này rất hữu ích trong các trường hợp sau:</p>
    <ul>
        <li><strong>Khi gặp từ vựng mới:</strong> Nếu bạn gặp từ mới trong văn bản mà không biết nghĩa của nó, bạn có thể sử dụng các từ xung quanh để đoán nghĩa của từ đó.</li>
        <li><strong>Khi không có từ điển:</strong> Nếu không có từ điển bên cạnh, bạn có thể sử dụng ngữ cảnh để hiểu nghĩa của từ và vẫn có thể tiếp tục đọc mà không bị gián đoạn.</li>
        <li><strong>Khi đọc văn bản khó hiểu:</strong> Đôi khi một câu hoặc đoạn văn có thể khó hiểu nếu bạn chỉ tập trung vào các từ lẻ. Việc sử dụng ngữ cảnh giúp bạn hiểu nghĩa tổng thể của văn bản.</li>
    </ul>

    <h2>C. Các bước sử dụng phương pháp sử dụng ngữ cảnh:</h2>
    <ol>
        <li><strong>Xác định từ hoặc câu khó hiểu:</strong> Đầu tiên, hãy tìm ra từ hoặc câu bạn không hiểu.</li>
        <li><strong>Đọc các câu xung quanh:</strong> Đọc các câu trước và sau từ đó để tìm các từ khóa có thể giúp bạn đoán nghĩa của từ mới.</li>
        <li><strong>Dự đoán nghĩa của từ:</strong> Sử dụng các gợi ý từ ngữ cảnh để suy đoán nghĩa của từ hoặc câu.</li>
        <li><strong>Kiểm tra lại với ngữ cảnh:</strong> Đảm bảo rằng nghĩa bạn đoán ra hợp lý với ngữ cảnh của toàn bộ văn bản.</li>
    </ol>

    <h2>D. Bài tập mẫu:</h2>
    <h3>Văn bản mẫu:</h3>
    <p><em>The new technology was highly anticipated, but it turned out to be quite cumbersome. The device was too heavy and awkward to use, making it difficult for most people to adapt to it.</em></p>

    <h3>Câu hỏi mẫu:</h3>
    <ol>
        <li>What does the word "cumbersome" mean in the context of the passage?</li>
        <li>Why was the new technology difficult to use?</li>
        <li>What can we infer about the reaction to the new technology?</li>
    </ol>

    <h3>Hướng dẫn giải chi tiết:</h3>
    <ol>
        <li><strong>What does the word "cumbersome" mean in the context of the passage?</strong><br>
        Dựa vào ngữ cảnh, từ "cumbersome" được sử dụng để mô tả một thiết bị "too heavy and awkward to use." Vì vậy, từ này có nghĩa là "nặng nề" hoặc "khó sử dụng."</li>

        <li><strong>Why was the new technology difficult to use?</strong><br>
        Câu trả lời có thể tìm thấy trong phần tiếp theo: "The device was too heavy and awkward to use."</li>

        <li><strong>What can we infer about the reaction to the new technology?</strong><br>
        Dựa vào thông tin, chúng ta có thể suy luận rằng công nghệ mới không nhận được phản hồi tích cực vì nó khó sử dụng.</li>
    </ol>

    <h3>Giải thích chi tiết:</h3>
    <p>Sử dụng ngữ cảnh giúp bạn không cần phải tra từ điển mà vẫn có thể hiểu được nghĩa của từ mới thông qua các từ hoặc câu liên quan xung quanh.</p>`,
    6:`<h1>Phương pháp 6: Suy luận (Inference)</h1>

    <h2>A. Khái niệm:</h2>
    <p>Phương pháp suy luận (Inference) là quá trình người đọc sử dụng thông tin có sẵn trong văn bản và kiến thức cá nhân để rút ra kết luận mà văn bản không nêu rõ. Suy luận giúp bạn hiểu được những điều không trực tiếp được nói ra nhưng vẫn có thể đoán được từ các chi tiết trong văn bản.</p>

    <h2>B. Khi nào nên sử dụng:</h2>
    <p>Phương pháp này rất hữu ích khi bạn:</p>
    <ul>
        <li><strong>Khi gặp những câu hoặc ý chưa rõ ràng:</strong> Nếu văn bản không trực tiếp trả lời câu hỏi, bạn cần suy luận từ những gì đã được cung cấp.</li>
        <li><strong>Khi muốn hiểu sâu hơn về thông điệp của văn bản:</strong> Phương pháp suy luận giúp bạn hiểu được những thông điệp ẩn chứa hoặc cảm xúc mà tác giả muốn truyền đạt.</li>
        <li><strong>Khi gặp câu hỏi yêu cầu hiểu ý sâu:</strong> Các câu hỏi yêu cầu bạn suy luận từ văn bản để tìm ra thông tin mà không được viết rõ ràng.</li>
    </ul>

    <h2>C. Các bước sử dụng phương pháp suy luận:</h2>
    <ol>
        <li><strong>Đọc kỹ văn bản:</strong> Để suy luận chính xác, bạn cần phải đọc kỹ văn bản và chú ý đến các chi tiết, đặc biệt là những phần mà tác giả không trực tiếp nói ra.</li>
        <li><strong>Xác định câu hỏi yêu cầu suy luận:</strong> Nhận diện những câu hỏi yêu cầu bạn suy luận từ văn bản.</li>
        <li><strong>Phân tích các chi tiết trong văn bản:</strong> Tìm các dấu hiệu hoặc yếu tố gợi mở mà tác giả đã đề cập một cách gián tiếp. Những yếu tố này có thể bao gồm hành động, cảm xúc, hoặc cách mô tả nhân vật, tình huống.</li>
        <li><strong>Sử dụng kiến thức nền:</strong> Dựa vào những gì bạn đã biết về chủ đề, văn hóa, hoặc xã hội, kết hợp với thông tin có trong văn bản để suy luận ra những ý nghĩa hoặc thông điệp sâu hơn.</li>
        <li><strong>Kiểm tra lại suy luận:</strong> Sau khi suy luận, hãy kiểm tra lại với văn bản để xem bạn có hiểu đúng hay không. Đảm bảo suy luận của bạn có cơ sở vững chắc từ các chi tiết trong văn bản.</li>
    </ol>

    <h2>D. Bài tập mẫu:</h2>
    <h3>Văn bản mẫu:</h3>
    <p><em>The forest was eerily silent as they trudged deeper into the woods. The air was thick, and the only sound was the crunch of their boots on the dry leaves beneath their feet. After a long stretch, they stopped to rest. The tension in the air was palpable, and each of them looked around, uneasy, as if expecting something to jump out at any moment.</em></p>

    <h3>Câu hỏi mẫu:</h3>
    <ol>
        <li>What can we infer about the mood in the forest?</li>
        <li>Why might the characters feel uneasy?</li>
        <li>What does the word "eerily" suggest about the forest?</li>
        <li>How does the environment reflect the characters' emotions?</li>
    </ol>

    <h3>Hướng dẫn giải chi tiết:</h3>
    <ol>
        <li><strong>What can we infer about the mood in the forest?</strong><br>
        Dựa vào từ "eerily silent" và "tension in the air," chúng ta có thể suy luận rằng bầu không khí trong rừng rất căng thẳng và đáng sợ.</li>

        <li><strong>Why might the characters feel uneasy?</strong><br>
        "Each of them looked around, uneasy," gợi ý rằng họ cảm thấy bất an, có thể vì họ đang ở một nơi vắng vẻ và có cảm giác nguy hiểm.</li>

        <li><strong>What does the word "eerily" suggest about the forest?</strong><br>
        Từ "eerily" mang nghĩa là "kỳ lạ và đáng sợ," giúp chúng ta suy luận rằng khu rừng có một bầu không khí ma quái hoặc đáng lo ngại.</li>

        <li><strong>How does the environment reflect the characters' emotions?</strong><br>
        Môi trường trong rừng, với không khí im lặng kỳ lạ và cảm giác căng thẳng, phản ánh sự lo lắng và bất an của các nhân vật.</li>
    </ol>

    <h3>Giải thích chi tiết:</h3>
    <p>Thông qua các chi tiết như "eerily silent," "tension in the air," và "uneasy," ta có thể suy luận rằng khu rừng tạo ra một cảm giác đáng sợ và các nhân vật cảm thấy bất an. Những thông tin này không được nói rõ trong văn bản nhưng có thể suy ra qua các miêu tả gián tiếp.</p>`,

    7:`<h1>Phương pháp 7: Phân tích cấu trúc đoạn văn (Analyze Text Structure)</h1>

    <h2>A. Khái niệm:</h2>
    <p>Phương pháp phân tích cấu trúc đoạn văn là kỹ thuật giúp người đọc hiểu cách văn bản được tổ chức, từ đó dễ dàng nhận ra các ý chính, luận điểm và cách mà tác giả xây dựng lập luận trong bài viết.</p>

    <h2>B. Khi nào nên sử dụng:</h2>
    <p>Phương pháp này hữu ích khi bạn:</p>
    <ul>
        <li><strong>Muốn hiểu cách tác giả trình bày các ý tưởng:</strong> Phân tích cấu trúc giúp bạn nhận ra cách mà thông tin được sắp xếp trong văn bản (ví dụ, so sánh, tương phản, mô tả, nguyên nhân-kết quả).</li>
        <li><strong>Đọc các bài văn dài hoặc có nhiều phần:</strong> Khi gặp văn bản dài, việc phân tích cấu trúc sẽ giúp bạn tìm ra các phần quan trọng và theo dõi dòng chảy của bài viết.</li>
        <li><strong>Làm bài tập yêu cầu hiểu các mối quan hệ trong văn bản:</strong> Phân tích cấu trúc giúp bạn xác định các mối liên kết giữa các câu, đoạn văn, và chủ đề chính.</li>
    </ul>

    <h2>C. Các bước sử dụng phương pháp phân tích cấu trúc đoạn văn:</h2>
    <ol>
        <li><strong>Đọc lướt qua văn bản:</strong> Bắt đầu bằng cách đọc nhanh để nhận biết cấu trúc tổng thể của bài viết (ví dụ: mở bài, thân bài, kết luận).</li>
        <li><strong>Xác định các phần chính trong văn bản:</strong> Chú ý đến các đoạn văn, các câu chủ đề, hoặc các cụm từ quan trọng, vì đây là nơi tác giả trình bày ý chính.</li>
        <li><strong>Phân tích mối quan hệ giữa các phần:</strong> Tìm hiểu cách các đoạn văn liên kết với nhau và cách tác giả chuyển từ một ý tưởng này sang ý tưởng khác. Lý giải tại sao một câu hoặc đoạn lại xuất hiện ở vị trí đó.</li>
        <li><strong>Hiểu mục đích của cấu trúc:</strong> Tìm hiểu tại sao tác giả lại sử dụng một cấu trúc văn bản cụ thể để làm rõ thông điệp hoặc luận điểm của mình.</li>
    </ol>

    <h2>D. Bài tập mẫu:</h2>
    <h3>Văn bản mẫu:</h3>
    <p><em>Firstly, the company's profits have significantly increased over the last quarter. Secondly, the employee satisfaction survey shows a positive trend, with more staff feeling engaged and valued. However, the report also highlights concerns about the long working hours, which could lead to burnout. In conclusion, while there are several positive developments, the company needs to address work-life balance issues to ensure long-term success.</em></p>

    <h3>Câu hỏi mẫu:</h3>
    <ol>
        <li>What is the main point of the first paragraph?</li>
        <li>How are the ideas in the second and third sentences connected?</li>
        <li>What is the purpose of the word "however" in the third sentence?</li>
        <li>What do you think the author wants the company to focus on in the conclusion?</li>
    </ol>

    <h3>Hướng dẫn giải chi tiết:</h3>
    <ol>
        <li><strong>What is the main point of the first paragraph?</strong><br>
        Câu chủ đề trong đoạn văn này là "Firstly, the company's profits have significantly increased over the last quarter." Đây là phần mở đầu, trình bày về sự gia tăng lợi nhuận.</li>

        <li><strong>How are the ideas in the second and third sentences connected?</strong><br>
        Cả hai câu đều liên quan đến sự phát triển của công ty, nhưng câu thứ ba đưa ra một vấn đề tiềm ẩn ("long working hours"), cho thấy rằng dù có tiến triển, vẫn có những thách thức cần giải quyết.</li>

        <li><strong>What is the purpose of the word "however" in the third sentence?</strong><br>
        Từ "however" được sử dụng để chuyển từ một ý tích cực sang một vấn đề tiêu cực, giúp tạo sự cân bằng trong việc trình bày cả hai mặt của tình hình.</li>

        <li><strong>What do you think the author wants the company to focus on in the conclusion?</strong><br>
        Tác giả muốn công ty chú trọng vào vấn đề cân bằng công việc và cuộc sống, nhằm duy trì sự phát triển bền vững.</li>
    </ol>

    <h3>Giải thích chi tiết:</h3>
    <p>Phân tích cấu trúc giúp bạn hiểu rõ cách các ý tưởng được phát triển từ câu này sang câu khác. Ví dụ, câu "however" làm nổi bật sự chuyển hướng trong luận điểm từ các kết quả tích cực sang một vấn đề cần giải quyết, tạo nên sự đối lập cần thiết.</p>`,
    8:`<h1>Phương pháp 8: Tóm tắt (Summarize)</h1>

    <h2>A. Khái niệm:</h2>
    <p>Tóm tắt là phương pháp giúp bạn rút ra các điểm chính của văn bản, bỏ qua những chi tiết phụ, để làm nổi bật thông điệp cốt lõi. Tóm tắt giúp bạn dễ dàng nắm bắt nội dung văn bản mà không cần phải đọc lại toàn bộ.</p>

    <h2>B. Khi nào nên sử dụng:</h2>
    <p>Phương pháp này hữu ích khi bạn:</p>
    <ul>
        <li><strong>Cần tóm lược thông tin nhanh chóng:</strong> Sau khi đọc một văn bản dài, bạn có thể sử dụng phương pháp tóm tắt để nắm bắt ý chính.</li>
        <li><strong>Giải quyết các câu hỏi yêu cầu viết tóm tắt:</strong> Khi bài tập yêu cầu bạn viết một bản tóm tắt, phương pháp này sẽ giúp bạn tóm gọn các thông tin chính.</li>
        <li><strong>Luyện tập kỹ năng đọc hiểu:</strong> Tóm tắt là cách tốt để kiểm tra mức độ hiểu của bạn về văn bản.</li>
    </ul>

    <h2>C. Các bước sử dụng phương pháp tóm tắt:</h2>
    <ol>
        <li><strong>Đọc toàn bộ văn bản:</strong> Đọc qua toàn bộ văn bản để nắm bắt ý chính.</li>
        <li><strong>Xác định các điểm chính:</strong> Chú ý đến các câu chủ đề, luận điểm chính, và những thông tin quan trọng mà tác giả muốn truyền đạt.</li>
        <li><strong>Viết lại bằng từ ngữ của bạn:</strong> Dùng từ ngữ đơn giản để viết lại các điểm chính trong văn bản. Lược bỏ các chi tiết phụ không cần thiết.</li>
        <li><strong>Kiểm tra lại tóm tắt:</strong> Đảm bảo rằng bạn đã làm rõ các điểm chính và thông điệp mà tác giả muốn truyền tải.</li>
    </ol>

    <h2>D. Bài tập mẫu:</h2>
    <h3>Văn bản mẫu:</h3>
    <p><em>In recent years, the demand for renewable energy sources has increased significantly. This shift has been driven by concerns over climate change and the depletion of fossil fuels. Governments around the world have introduced policies to encourage the use of solar, wind, and other sustainable energy sources. Despite the progress, challenges remain in terms of infrastructure, cost, and public adoption. However, continued advancements in technology and policy reforms offer hope for a cleaner, more sustainable future.</em></p>

    <h3>Câu hỏi mẫu:</h3>
    <ol>
        <li>What is the main idea of the passage?</li>
        <li>What has driven the demand for renewable energy?</li>
        <li>What challenges are mentioned regarding renewable energy?</li>
        <li>What is the outlook for the future of renewable energy?</li>
    </ol>

    <h3>Hướng dẫn giải chi tiết:</h3>
    <ol>
        <li><strong>What is the main idea of the passage?</strong><br>
        Main idea: The demand for renewable energy is growing due to concerns about climate change and fossil fuel depletion, but challenges still exist.</li>

        <li><strong>What has driven the demand for renewable energy?</strong><br>
        The demand has increased due to concerns about climate change and the depletion of fossil fuels.</li>

        <li><strong>What challenges are mentioned regarding renewable energy?</strong><br>
        The challenges include infrastructure, cost, and public adoption.</li>

        <li><strong>What is the outlook for the future of renewable energy?</strong><br>
        The outlook is positive, with advancements in technology and policy reforms offering hope for a cleaner and more sustainable future.</li>
    </ol>

    <h3>Giải thích chi tiết:</h3>
    <p>Phương pháp tóm tắt yêu cầu bạn phải nắm bắt ý chính và lược bỏ các chi tiết phụ. Bằng cách trả lời các câu hỏi trên, bạn đã nắm được những điểm chính của đoạn văn: sự gia tăng nhu cầu năng lượng tái tạo, nguyên nhân, thách thức và triển vọng tương lai.</p>`,
    9:`<h1>Phương pháp 9: Dự đoán (Predict)</h1>

    <h2>A. Khái niệm:</h2>
    <p>Dự đoán (Predict) là phương pháp đọc hiểu giúp người đọc dự báo những gì sẽ xảy ra tiếp theo trong văn bản dựa trên thông tin hiện có. Phương pháp này kích thích khả năng suy luận và tạo sự liên kết giữa các phần trong văn bản.</p>

    <h2>B. Khi nào nên sử dụng:</h2>
    <p>Phương pháp này hữu ích khi bạn:</p>
    <ul>
        <li><strong>Muốn kiểm tra sự hiểu biết của mình về văn bản:</strong> Dự đoán giúp bạn kiểm tra mức độ nắm bắt các mạch ý trong văn bản.</li>
        <li><strong>Giúp tăng khả năng tập trung:</strong> Khi bạn dự đoán, bạn có xu hướng chú ý hơn đến các chi tiết và sự phát triển của cốt truyện hoặc lập luận.</li>
        <li><strong>Khi muốn hiểu sâu hơn về nội dung:</strong> Dự đoán không chỉ giúp bạn dự báo mà còn giúp bạn hiểu cách tác giả xây dựng câu chuyện hoặc bài viết.</li>
    </ul>

    <h2>C. Các bước sử dụng phương pháp dự đoán:</h2>
    <ol>
        <li><strong>Đọc phần mở đầu của văn bản:</strong> Xác định bối cảnh và những yếu tố có thể giúp bạn dự đoán về nội dung tiếp theo.</li>
        <li><strong>Dựa vào các chi tiết có sẵn để đưa ra dự đoán:</strong> Dựa vào các từ, các sự kiện, hay các mối quan hệ giữa các nhân vật hoặc ý tưởng để dự đoán diễn biến tiếp theo.</li>
        <li><strong>Kiểm tra dự đoán khi tiếp tục đọc:</strong> Khi bạn đọc tiếp, kiểm tra xem dự đoán của bạn có chính xác hay không.</li>
        <li><strong>Điều chỉnh dự đoán nếu cần:</strong> Nếu bạn nhận ra dự đoán ban đầu không chính xác, điều chỉnh lại dự đoán dựa trên các thông tin mới mà bạn đọc được.</li>
    </ol>

    <h2>D. Bài tập mẫu:</h2>
    <h3>Văn bản mẫu:</h3>
    <p><em>After years of struggling with his personal demons, John finally decided to confront his fears. He entered the dark room with a deep breath, determined to face what had been haunting him for so long. As he stepped further into the room, a shadowy figure appeared before him.</em></p>

    <h3>Câu hỏi mẫu:</h3>
    <ol>
        <li>What do you predict will happen next in the story?</li>
        <li>Why do you think John is entering the dark room?</li>
        <li>What might the shadowy figure represent?</li>
    </ol>

    <h3>Hướng dẫn giải chi tiết:</h3>
    <ol>
        <li><strong>What do you predict will happen next in the story?</strong><br>
        Dựa trên thông tin "John finally decided to confront his fears," có thể dự đoán rằng John sẽ đối diện với nỗi sợ của mình và có thể sẽ có một sự kiện quan trọng hoặc khám phá trong phòng tối.</li>

        <li><strong>Why do you think John is entering the dark room?</strong><br>
        John đang đối diện với nỗi sợ hãi của mình, vì vậy việc bước vào phòng tối có thể là bước đi cần thiết để vượt qua những điều ám ảnh anh ta.</li>

        <li><strong>What might the shadowy figure represent?</strong><br>
        Hình bóng có thể là biểu tượng của nỗi sợ hãi, cảm giác lo âu hoặc vấn đề mà John phải đối mặt.</li>
    </ol>

    <h3>Giải thích chi tiết:</h3>
    <p>Dự đoán giúp bạn tương tác với văn bản và kích thích sự tò mò. Trong trường hợp này, bạn có thể dự đoán rằng sự xuất hiện của bóng tối sẽ mở ra một bước ngoặt quan trọng trong câu chuyện.</p>`,
    10:`<h1>Phương pháp 10: Kiểm tra lại và xem lại câu trả lời (Review and Check)</h1>

    <h2>A. Khái niệm:</h2>
    <p>Kiểm tra lại và xem lại câu trả lời là phương pháp giúp người đọc chắc chắn rằng họ đã hiểu đúng và trả lời các câu hỏi một cách chính xác. Phương pháp này giúp bạn tránh được các lỗi sai do sự vội vàng hoặc không chú ý kỹ.</p>

    <h2>B. Khi nào nên sử dụng:</h2>
    <p>Phương pháp này hữu ích khi bạn:</p>
    <ul>
        <li><strong>Hoàn thành bài tập đọc hiểu:</strong> Sau khi trả lời câu hỏi, bạn nên dành thời gian để xem lại các câu trả lời và đảm bảo rằng mình đã trả lời đúng và đầy đủ.</li>
        <li><strong>Khi làm bài thi hoặc kiểm tra:</strong> Việc kiểm tra lại các câu trả lời giúp bạn phát hiện ra những lỗi sai hoặc bỏ sót.</li>
        <li><strong>Cải thiện khả năng đọc hiểu:</strong> Việc kiểm tra lại giúp bạn đánh giá và cải thiện kỹ năng đọc hiểu của mình.</li>
    </ul>

    <h2>C. Các bước sử dụng phương pháp kiểm tra lại:</h2>
    <ol>
        <li><strong>Xem lại câu hỏi:</strong> Đọc lại các câu hỏi để đảm bảo bạn đã trả lời đúng yêu cầu của bài tập.</li>
        <li><strong>Kiểm tra các câu trả lời:</strong> Đọc lại các câu trả lời của mình và đối chiếu với văn bản để chắc chắn rằng các thông tin bạn cung cấp là chính xác.</li>
        <li><strong>Điều chỉnh câu trả lời nếu cần:</strong> Nếu bạn nhận thấy câu trả lời của mình thiếu sót hoặc sai sót, hãy sửa lại.</li>
        <li><strong>Kiểm tra kỹ từng chi tiết nhỏ:</strong> Đảm bảo rằng bạn không bỏ sót bất kỳ chi tiết quan trọng nào trong văn bản.</li>
    </ol>`,
    11:`<h1>Câu Hỏi Về Ý Chính (Main Idea/Topic)</h1>

    <h2>1. Khái Quát Về Câu Hỏi Về Ý Chính</h2>
    <p>Câu hỏi về ý chính yêu cầu người đọc xác định chủ đề chính hoặc thông điệp cốt lõi của đoạn văn hoặc bài viết. Để trả lời đúng câu hỏi này, người đọc phải hiểu rõ thông tin chính và mục đích của bài viết, không chỉ dừng lại ở các chi tiết cụ thể mà còn phải nhận diện được tổng thể nội dung của văn bản.</p>

    <h2>2. Cách Giải Quyết Câu Hỏi Về Ý Chính</h2>
    <p>Để trả lời câu hỏi này, bạn có thể sử dụng phương pháp <strong>Đọc lướt (Skimming)</strong>. Phương pháp này giúp bạn nhanh chóng quét qua văn bản để nắm bắt ý chính mà không cần đọc kỹ từng chi tiết. Các bước cần thực hiện là:</p>
    <ul>
        <li>Lướt qua các tiêu đề và đoạn mở đầu, kết luận: Đây thường là những nơi chứa thông tin quan trọng về chủ đề chính.</li>
        <li>Xác định các từ khóa và cụm từ chính: Các từ hoặc câu lặp lại nhiều lần trong văn bản thường gợi ý về chủ đề chính.</li>
        <li>Tóm tắt nội dung của văn bản: Sau khi đã nắm được những thông tin chính, hãy thử tóm tắt lại bằng câu ngắn gọn, giúp nhận diện chính xác nội dung cốt lõi.</li>
    </ul>

    <h2>3. Bài Mẫu Với Câu Hỏi Về Ý Chính</h2>
    <h3>Văn Bản Mẫu:</h3>
    <p><i>The global climate crisis is one of the most pressing issues of our time. Scientists have warned that if current trends continue, we will face catastrophic environmental consequences. Rising temperatures, more frequent extreme weather events, and rising sea levels are just some of the effects. It is crucial for governments and individuals to take immediate action to reduce carbon emissions and transition to renewable energy sources.</i></p>

    <h3>Câu Hỏi:</h3>
    <p><strong>What is the main idea of the passage?</strong></p>
    <ul>
        <li>a) The causes of the global climate crisis</li>
        <li>b) The immediate effects of climate change</li>
        <li>c) The importance of taking action to address climate change</li>
        <li>d) The role of renewable energy in mitigating climate change</li>
    </ul>

    <h3>Giải Đáp:</h3>
    <p><strong>Phương pháp Đọc lướt (Skimming):</strong> Khi lướt qua bài viết, ta thấy rằng tác giả đang nói về những tác động của biến đổi khí hậu và nhấn mạnh việc cần hành động ngay lập tức.</p>

    <p><span class="answer">Câu trả lời đúng: c) The importance of taking action to address climate change.</span></p>`,
    12:`<h1>Câu Hỏi Về Chi Tiết (Detail Questions)</h1>

    <h2>1. Khái Quát Về Câu Hỏi Về Chi Tiết</h2>
    <p>Câu hỏi về chi tiết yêu cầu người đọc trả lời các câu hỏi dựa trên thông tin cụ thể có trong văn bản. Các câu hỏi này có thể yêu cầu bạn chỉ ra những thông tin như con số, địa điểm, sự kiện, hoặc những dữ kiện cụ thể đã được nêu ra trong bài viết.</p>

    <h2>2. Cách Giải Quyết Câu Hỏi Về Chi Tiết</h2>
    <p>Để giải quyết câu hỏi chi tiết, bạn có thể sử dụng phương pháp <strong>Đọc chi tiết (Scanning)</strong>. Phương pháp này yêu cầu bạn tìm kiếm thông tin một cách nhanh chóng và chính xác mà không cần đọc toàn bộ văn bản. Các bước thực hiện là:</p>
    <ul>
        <li>Tìm từ khóa hoặc thông tin cụ thể: Xác định câu hỏi yêu cầu thông tin gì, ví dụ như một con số, một địa điểm, một sự kiện.</li>
        <li>Đọc các đoạn văn có chứa thông tin cần tìm: Quét qua văn bản để tìm các chi tiết cụ thể liên quan đến câu hỏi.</li>
    </ul>

    <h2>3. Bài Mẫu Với Câu Hỏi Về Chi Tiết</h2>
    <h3>Văn Bản Mẫu:</h3>
    <p><i>In 2020, the global economy contracted by 4.3% due to the COVID-19 pandemic. Many industries, particularly tourism and hospitality, were severely affected. Governments around the world responded with economic stimulus packages, but the recovery is expected to be slow and uneven.</i></p>

    <h3>Câu Hỏi:</h3>
    <p><strong>What was the global economic contraction in 2020?</strong></p>
    <ul>
        <li>a) 3.1%</li>
        <li>b) 4.3%</li>
        <li>c) 5.0%</li>
        <li>d) 6.5%</li>
    </ul>

    <h3>Giải Đáp:</h3>
    <p><strong>Phương pháp Đọc chi tiết (Scanning):</strong> Trong văn bản, có thông tin "In 2020, the global economy contracted by 4.3%."</p>

    <p><span class="answer">Câu trả lời đúng: b) 4.3%.</span></p>`,
    13:`<h1>Câu Hỏi Suy Luận (Inference Questions)</h1>

    <h2>1. Khái Quát Về Câu Hỏi Suy Luận</h2>
    <p>Câu hỏi suy luận yêu cầu người đọc phải đưa ra các kết luận hoặc giả định dựa trên thông tin có sẵn trong văn bản. Câu hỏi này không yêu cầu bạn chỉ đơn giản tìm kiếm thông tin cụ thể, mà yêu cầu bạn sử dụng khả năng suy luận để hiểu rõ hơn về những điều không được nói trực tiếp trong văn bản.</p>

    <h2>2. Cách Giải Quyết Câu Hỏi Suy Luận</h2>
    <p>Để trả lời câu hỏi suy luận, bạn có thể sử dụng phương pháp <strong>Suy luận (Inference)</strong>. Các bước thực hiện là:</p>
    <ul>
        <li>Đọc kỹ các chi tiết và sự kiện trong văn bản: Sau đó, suy luận ra các kết luận hợp lý dựa trên những gì đã được đề cập.</li>
        <li>Tìm các dấu hiệu ngữ nghĩa và cảm xúc: Lưu ý các từ ngữ gợi cảm xúc hoặc tình huống có thể giúp bạn suy ra thông điệp mà tác giả muốn truyền tải.</li>
    </ul>

    <h2>3. Bài Mẫu Với Câu Hỏi Suy Luận</h2>
    <h3>Văn Bản Mẫu:</h3>
    <p><i>Although the storm caused significant damage, the community came together to rebuild. Volunteers from nearby areas arrived quickly, offering their help. The resilience of the people was evident as they worked together to restore homes and businesses.</i></p>

    <h3>Câu Hỏi:</h3>
    <p><strong>What can be inferred about the community’s response to the storm?</strong></p>
    <ul>
        <li>a) The community was disorganized and ineffective.</li>
        <li>b) The community was able to recover quickly due to their cooperation.</li>
        <li>c) Only local people helped with the recovery efforts.</li>
        <li>d) The storm was not very destructive.</li>
    </ul>

    <h3>Giải Đáp:</h3>
    <p><strong>Phương pháp Suy luận (Inference):</strong> Từ những thông tin như "the community came together" và "The resilience of the people was evident," ta có thể suy luận rằng cộng đồng đã phục hồi nhanh chóng nhờ vào sự hợp tác của họ.</p>

    <p><span class="answer">Câu trả lời đúng: b) The community was able to recover quickly due to their cooperation.</span></p>`,
    14:`<h1>Câu Hỏi Về Từ Vựng (Vocabulary Questions)</h1>

    <h2>1. Khái Quát Về Câu Hỏi Từ Vựng</h2>
    <p>Câu hỏi từ vựng yêu cầu người đọc hiểu nghĩa của từ hoặc cụm từ trong ngữ cảnh của bài viết. Điều này đòi hỏi bạn phải sử dụng khả năng phân tích ngữ cảnh để đoán nghĩa từ mới hoặc xác định nghĩa của các từ đã biết khi chúng được sử dụng trong các tình huống cụ thể.</p>

    <h2>2. Cách Giải Quyết Câu Hỏi Từ Vựng</h2>
    <p>Để trả lời câu hỏi từ vựng, bạn có thể sử dụng phương pháp <strong>Sử dụng ngữ cảnh (Context Clues)</strong>. Các bước thực hiện là:</p>
    <ul>
        <li>Xem xét ngữ cảnh xung quanh từ: Tìm hiểu từ này xuất hiện trong câu hoặc đoạn nào và những từ nào đi kèm.</li>
        <li>Phân tích các từ đồng nghĩa hoặc trái nghĩa: Đôi khi, ngữ cảnh có thể cung cấp các từ tương đương hoặc đối lập giúp bạn hiểu nghĩa của từ.</li>
    </ul>

    <h2>3. Bài Mẫu Với Câu Hỏi Từ Vựng</h2>
    <h3>Văn Bản Mẫu:</h3>
    <p><i>The company’s new policy aims to ameliorate the working conditions for its employees. This means providing them with better equipment, more flexible hours, and a more comfortable work environment.</i></p>

    <h3>Câu Hỏi:</h3>
    <p><strong>What does the word "ameliorate" mean in this passage?</strong></p>
    <ul>
        <li>a) To worsen</li>
        <li>b) To improve</li>
        <li>c) To ignore</li>
        <li>d) To replace</li>
    </ul>

    <h3>Giải Đáp:</h3>
    <p><strong>Phương pháp Sử dụng ngữ cảnh (Context Clues):</strong> Câu "This means providing them with better equipment, more flexible hours," cho thấy mục đích của chính sách là cải thiện điều kiện làm việc.</p>

    <p><span class="answer">Câu trả lời đúng: b) To improve.</span></p>`,
    15:`<h1>Câu Hỏi Về Thái Độ/Tác Giả (Author’s Purpose/Attitude Questions)</h1>

    <h2>1. Khái Quát Về Câu Hỏi Thái Độ/Tác Giả</h2>
    <p>Câu hỏi về thái độ hoặc mục đích của tác giả yêu cầu người đọc phân tích và hiểu được quan điểm, thái độ, hoặc lý do mà tác giả viết bài văn. Thông qua những câu hỏi này, bạn sẽ cần nhận diện được thái độ của tác giả đối với một chủ đề cụ thể, chẳng hạn như sự đồng tình, chỉ trích, khuyến khích, hoặc cảnh báo. Tác giả có thể biểu lộ thái độ của mình qua cách lựa chọn từ ngữ, cách diễn đạt hoặc các ví dụ được sử dụng trong bài.</p>

    <h2>2. Cách Giải Quyết Câu Hỏi Về Thái Độ/Tác Giả</h2>
    <p>Để trả lời câu hỏi về thái độ của tác giả, bạn có thể sử dụng phương pháp <strong>Phân tích cấu trúc đoạn văn (Analyze Text Structure)</strong> và <strong>Suy luận (Inference)</strong>. Các bước thực hiện bao gồm:</p>
    <ul>
        <li>Phân tích từ ngữ và phong cách của tác giả: Những từ ngữ như "đáng lo ngại", "vui mừng", "thách thức" hay "cảnh báo" có thể tiết lộ thái độ của tác giả.</li>
        <li>Chú ý đến cách tác giả trình bày vấn đề: Tác giả có thể sử dụng các ví dụ tiêu cực hoặc tích cực để thể hiện quan điểm của mình.</li>
    </ul>

    <h2>3. Bài Mẫu Với Câu Hỏi Về Thái Độ/Tác Giả</h2>
    <h3>Văn Bản Mẫu:</h3>
    <p><i>The rapid decline in biodiversity is a serious threat to our planet’s future. Without immediate action, we may face irreversible consequences, including the collapse of ecosystems that we depend on. Governments must adopt stricter environmental regulations to protect our natural world, and individuals should make sustainable choices in their daily lives.</i></p>

    <h3>Câu Hỏi:</h3>
    <p><strong>What is the author's attitude toward the decline in biodiversity?</strong></p>
    <ul>
        <li>a) Indifference</li>
        <li>b) Concern</li>
        <li>c) Support</li>
        <li>d) Uncertainty</li>
    </ul>

    <h3>Giải Đáp:</h3>
    <p><strong>Phương pháp Phân tích cấu trúc đoạn văn (Analyze Text Structure):</strong> Từ các cụm từ như "serious threat" và "irrevocable consequences," tác giả thể hiện thái độ lo ngại nghiêm túc về sự suy giảm đa dạng sinh học.</p>

    <p><strong>Phương pháp Suy luận (Inference):</strong> Những từ ngữ mạnh mẽ như "serious threat" và "irrevocable consequences" gợi ý rằng tác giả đang thể hiện sự lo ngại.</p>

    <p><span class="answer">Câu trả lời đúng: b) Concern.</span></p>`,
    16:`<h1>Câu Hỏi Chi Tiết Không Được Nhắc Tới (Detail Not Mentioned Questions)</h1>
    <h2>1. Khái Quát Về Câu Hỏi Chi Tiết Không Được Nhắc Tới</h2>
    <p>Câu hỏi này yêu cầu bạn phải xác định điều gì không có trong bài viết, tức là thông tin nào không được nhắc đến hoặc không được tác giả đề cập. Những câu hỏi này thường yêu cầu người đọc phải suy nghĩ và loại bỏ các thông tin không có trong văn bản để tìm ra đáp án chính xác.</p>

    <h2>2. Cách Giải Quyết Câu Hỏi Chi Tiết Không Được Nhắc Tới</h2>
    <p>Để giải quyết câu hỏi này, bạn có thể sử dụng phương pháp <strong>Đọc chi tiết (Scanning)</strong> và <strong>Suy luận (Inference)</strong>. Các bước thực hiện bao gồm:</p>
    <ul>
        <li>Đọc lại kỹ các chi tiết trong văn bản: Lưu ý các thông tin được tác giả đưa ra và so sánh với các lựa chọn đáp án.</li>
        <li>Loại trừ các thông tin có trong văn bản: Dựa vào những gì văn bản đã cung cấp, loại bỏ các lựa chọn không có trong đó.</li>
    </ul>

    <h2>3. Bài Mẫu Với Câu Hỏi Chi Tiết Không Được Nhắc Tới</h2>
    <h3>Văn Bản Mẫu:</h3>
    <p><i>The government's new policy aims to reduce traffic congestion by promoting the use of public transportation. It plans to build new bus routes and improve the frequency of trains. However, the policy does not address the issue of air pollution, which remains a major concern in urban areas.</i></p>

    <h3>Câu Hỏi:</h3>
    <p><strong>Which of the following is not mentioned in the passage?</strong></p>
    <ul>
        <li>a) The government's new policy on traffic</li>
        <li>b) The impact of the policy on air pollution</li>
        <li>c) Improvements to public transportation infrastructure</li>
        <li>d) The issue of traffic congestion</li>
    </ul>

    <h3>Giải Đáp:</h3>
    <p><strong>Phương pháp Đọc chi tiết (Scanning):</strong> Khi đọc văn bản, có thể thấy rằng chính sách mới của chính phủ được nhắc đến liên quan đến tắc nghẽn giao thông, phương tiện công cộng và xây dựng tuyến xe buýt mới, nhưng không có đề cập đến tác động của chính sách đối với ô nhiễm không khí.</p>

    <p><span class="answer">Câu trả lời đúng: b) The impact of the policy on air pollution.</span></p>`,
    17:`<h1>Câu Hỏi Tóm Tắt (Summary/Paraphrase Questions)</h1>

    <h2>1. Khái Quát Về Câu Hỏi Tóm Tắt</h2>
    <p>Câu hỏi tóm tắt yêu cầu người đọc rút ra ý chính của văn bản hoặc diễn đạt lại nội dung của đoạn văn một cách ngắn gọn nhưng đầy đủ. Điều này giúp kiểm tra khả năng tổng hợp thông tin và tóm tắt lại các ý chính một cách chính xác.</p>

    <h2>2. Cách Giải Quyết Câu Hỏi Tóm Tắt</h2>
    <p>Để giải quyết câu hỏi tóm tắt, bạn có thể sử dụng phương pháp <strong>Tóm tắt (Summarize)</strong>. Các bước cần thực hiện bao gồm:</p>
    <ul>
        <li>Đọc kỹ và xác định các ý chính trong văn bản: Chú ý đến các luận điểm quan trọng mà tác giả đề cập.</li>
        <li>Viết lại các ý chính bằng ngôn ngữ của bạn: Khi tóm tắt, tránh sao chép nguyên văn từ văn bản, mà hãy diễn đạt lại nội dung sao cho ngắn gọn và dễ hiểu.</li>
    </ul>

    <h2>3. Bài Mẫu Với Câu Hỏi Tóm Tắt</h2>
    <h3>Văn Bản Mẫu:</h3>
    <p><i>The rise in global temperatures has caused significant melting of polar ice caps. This has led to rising sea levels, which threaten coastal cities. In addition to flooding, these changes also result in the loss of biodiversity. Efforts are being made by scientists to reduce greenhouse gas emissions and to develop new technologies that can slow down the process of climate change.</i></p>

    <h3>Câu Hỏi:</h3>
    <p><strong>Which of the following is the best summary of the passage?</strong></p>
    <ul>
        <li>a) Rising temperatures are causing sea levels to rise, and scientists are working on solutions.</li>
        <li>b) Global warming has led to flooding in coastal cities, and more scientists are studying it.</li>
        <li>c) Coastal cities are flooding due to global warming, and scientists have yet to find a solution.</li>
        <li>d) Scientists are studying the effects of global warming on polar ice caps and biodiversity.</li>
    </ul>

    <h3>Giải Đáp:</h3>
    <p><strong>Phương pháp Tóm tắt (Summarize):</strong> Văn bản đề cập đến mối liên hệ giữa sự gia tăng nhiệt độ toàn cầu, tan băng, và mực nước biển dâng cao, đồng thời nhấn mạnh các nỗ lực của các nhà khoa học trong việc giảm phát thải khí nhà kính và phát triển công nghệ mới.</p>

    <p><span class="answer">Câu trả lời đúng: a) Rising temperatures are causing sea levels to rise, and scientists are working on solutions.</span></p>`,
    18:`<h1>Câu Hỏi Nối Với Đề Mục (Matching Headings Questions)</h1>

    <h2>1. Khái Quát Về Câu Hỏi Nối Với Đề Mục</h2>
    <p>Câu hỏi nối với đề mục yêu cầu người đọc xác định một tiêu đề hoặc đề mục phù hợp cho một đoạn văn hoặc một phần của bài viết. Đây là câu hỏi yêu cầu bạn hiểu rõ cấu trúc của bài viết và nội dung của từng phần để gán tiêu đề chính xác.</p>

    <h2>2. Cách Giải Quyết Câu Hỏi Nối Với Đề Mục</h2>
    <p>Để giải quyết câu hỏi này, bạn có thể sử dụng phương pháp <strong>Phân tích cấu trúc đoạn văn (Analyze Text Structure)</strong>. Các bước thực hiện bao gồm:</p>
    <ul>
        <li>Đọc kỹ từng đoạn văn: Lưu ý đến thông tin chính trong mỗi đoạn văn.</li>
        <li>Xem xét các tiêu đề và so sánh với nội dung: Chọn tiêu đề phản ánh đúng chủ đề và nội dung của đoạn văn.</li>
    </ul>

    <h2>3. Bài Mẫu Với Câu Hỏi Nối Với Đề Mục</h2>
    <h3>Văn Bản Mẫu:</h3>
    <p><strong>Paragraph 1:</strong> The increase in global temperatures has caused a significant rise in sea levels. This is leading to flooding in coastal areas, affecting millions of people.</p>
    <p><strong>Paragraph 2:</strong> In addition to the physical changes, the environment is also suffering. Many species are losing their habitats due to the changing climate.</p>

    <h3>Câu Hỏi:</h3>
    <p><strong>Which of the following headings matches paragraph 1?</strong></p>
    <ul>
        <li>a) The impact of rising sea levels</li>
        <li>b) The loss of biodiversity</li>
        <li>c) Climate change and its consequences</li>
        <li>d) The role of humans in global warming</li>
    </ul>

    <h3>Giải Đáp:</h3>
    <p><strong>Phương pháp Phân tích cấu trúc đoạn văn (Analyze Text Structure):</strong> Đoạn văn 1 tập trung vào sự gia tăng mực nước biển và tác động của nó đến các khu vực ven biển.</p>

    <p><span class="answer">Câu trả lời đúng: a) The impact of rising sea levels.</span></p>`

                  
            };

        function showLesson(id) {
            const details = lessons[id] || "<p>Bài học không tồn tại!</p>";
            document.getElementById('lessonDetails').innerHTML = details;
            document.getElementById('lessonModal').style.display = "block";
        }

        function closeLesson() {
            document.getElementById('lessonModal').style.display = "none";
        }

        if (!localStorage.getItem('loggedIn')) {
            alert('Bạn cần đăng nhập để truy cập trang này.');
            window.location.href = 'Đăng nhập.html';
          }