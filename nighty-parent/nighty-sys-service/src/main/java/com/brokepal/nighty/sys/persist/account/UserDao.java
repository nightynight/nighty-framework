package com.brokepal.nighty.sys.persist.account;

import com.brokepal.nighty.sys.model.account.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Timestamp;

/**
 * Created by Administrator on 2017/2/22.
 */
public interface UserDao {
    int createUser(User user);
    int updatePassword(User user);
    User getUserByUsername(String username);
    User getUserByEmail(String email);
}
